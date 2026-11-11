import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { promisify } from 'node:util';
import { downloadsOrigin, releasesFeedUrl } from '../src/lib/releases.mjs';
import { allowDownloads, bucket } from './allow-downloads.mjs';

const run = promisify(execFile);
const repository = 'babymastodon/capycanvas';
const work = resolve('artifacts/downloads');
const wrangler = resolve('node_modules/.bin/wrangler');

const ghEnv = { ...process.env, CLICOLOR_FORCE: '0' };
const gh = async (...args) => JSON.parse((await run('gh', args, { env: ghEnv, maxBuffer: 64 * 1024 * 1024 })).stdout);

const put = (key, file, headers) => run(wrangler, [
  'r2', 'object', 'put', `${bucket}/${key}`, '--remote', '--file', file,
  '--content-type', headers.type, '--cache-control', headers.cache,
  ...(headers.disposition ? ['--content-disposition', headers.disposition] : []),
]);

const sha256 = file => new Promise((done, fail) => {
  const hash = createHash('sha256');
  createReadStream(file).on('data', data => hash.update(data)).on('error', fail).on('end', () => done(`sha256:${hash.digest('hex')}`));
});

const mirrored = async () => JSON.parse((await run(wrangler, ['r2', 'object', 'get', `${bucket}/releases.json`, '--remote', '--pipe'], { maxBuffer: 64 * 1024 * 1024 })).stdout);

async function mirror(release) {
  const tag = release.tag_name;
  const assets = release.assets.filter(asset => asset.state === 'uploaded');
  const dir = join(work, tag);
  await rm(dir, { recursive: true, force: true });
  await mkdir(dir, { recursive: true });
  await run('gh', ['release', 'download', tag, '--repo', repository, '--dir', dir], { env: ghEnv });
  for (const asset of assets) {
    const file = join(dir, asset.name);
    const digest = await sha256(file);
    if (digest !== asset.digest) throw new Error(`${tag}/${asset.name} is ${digest}; GitHub lists ${asset.digest}`);
    await put(`${tag}/${asset.name}`, file, {
      type: asset.content_type,
      cache: 'public, max-age=31536000, immutable',
      disposition: `attachment; filename="${asset.name}"`,
    });
    console.log(`${tag}/${asset.name}`);
  }
  await rm(dir, { recursive: true });
  return {
    tag_name: release.tag_name,
    html_url: release.html_url,
    draft: release.draft,
    prerelease: release.prerelease,
    published_at: release.published_at,
    body: release.body,
    assets: assets.map(({ name, state, size, content_type, digest }) => ({
      name, state, size, content_type, digest,
      browser_download_url: `${downloadsOrigin}/${encodeURIComponent(tag)}/${encodeURIComponent(name)}`,
    })),
  };
}

const current = await mirrored();
const tags = (await gh('release', 'list', '--repo', repository, '--exclude-drafts', '--limit', '1000', '--json', 'tagName')).map(release => release.tagName);
const releases = [];
for (const tag of tags) {
  const release = await gh('api', `repos/${repository}/releases/tags/${tag}`);
  const listed = current.find(entry => entry.tag_name === tag);
  releases.push(listed ? { ...listed, html_url: release.html_url, body: release.body } : await mirror(release));
}
releases.sort((a, b) => b.published_at.localeCompare(a.published_at));
await mkdir(work, { recursive: true });
const feed = join(work, 'releases.json');
await writeFile(feed, `${JSON.stringify(releases, null, 2)}\n`);
await allowDownloads();
await put('releases.json', feed, { type: 'application/json', cache: 'public, max-age=300' });
console.log(`${releasesFeedUrl}: ${releases.map(release => release.tag_name).join(' ')}`);

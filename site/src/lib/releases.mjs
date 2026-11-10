import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

const upstreamOwner = 'https://github.com/capyatelier/';
const forkOwner = 'https://github.com/babymastodon/';
export const releasesUrl = `${forkOwner}capycanvas/releases`;
const onFork = url => url.startsWith(upstreamOwner) ? forkOwner + url.slice(upstreamOwner.length) : url;
export const downloadsOrigin = 'https://downloads.capycanvas.art';
export const releasesFeedUrl = `${downloadsOrigin}/releases.json`;
export const platformFiles = {
  android: { apk: version => `capycanvas-${version}-android.apk` },
  linux: { flatpak: version => `capycanvas-${version}-linux-x86_64.flatpak` },
  windows: {
    x64: version => `capycanvas-${version}-windows-x64-setup.exe`,
    arm64: version => `capycanvas-${version}-windows-arm64-setup.exe`,
  },
  mac: { appleSilicon: version => `capycanvas-${version}-macos-arm64.dmg` },
};
export const installFiles = { flatpak: { name: 'capycanvas.flatpakref', url: 'https://flatpak.capycanvas.art/capycanvas.flatpakref' } };
const notesHeadingLevel = 3;

export async function fetchReleases({ fetch = globalThis.fetch } = {}) {
  const response = await fetch(releasesFeedUrl, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Releases request failed with ${response.status} ${response.statusText}: ${releasesFeedUrl}`);
  return response.json();
}

export function publishedReleases(releases) {
  return releases
    .filter(release => !release.draft && !release.prerelease && release.published_at)
    .sort((a, b) => b.published_at.localeCompare(a.published_at))
    .map(release => {
      const version = release.tag_name.replace(/^v/, '');
      const file = name => {
        const asset = release.assets.find(asset => asset.name === name && asset.state === 'uploaded');
        return asset && { name: asset.name, url: asset.browser_download_url };
      };
      return {
        version,
        date: release.published_at.slice(0, 10),
        url: onFork(release.html_url),
        notes: renderNotes(release.body ?? '', { base: release.html_url, prefix: `notes-${version.replace(/[^\w-]/g, '-')}-` }),
        files: Object.fromEntries(Object.entries(platformFiles).flatMap(([platform, variants]) => {
          const found = Object.entries(variants).flatMap(([variant, name]) => {
            const asset = file(name(version));
            const install = installFiles[variant];
            return asset ? [{ variant, ...asset, ...(install && { install }) }] : [];
          });
          return found.length ? [[platform, found]] : [];
        })),
      };
    });
}

export function upcomingReleases(releases, entries, { base }) {
  const publishedVersions = new Set(releases.map(release => release.version));
  return entries
    .filter(entry => !publishedVersions.has(entry.version))
    .map(({ version, markdown }) => ({
      version,
      notes: renderNotes(markdown, { base, prefix: `notes-${version.replace(/[^\w-]/g, '-')}-`, localImages: true }),
    }));
}

export function renderNotes(markdown, { base, prefix, localImages = false }) {
  return String(unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true, clobberPrefix: '' })
    .use(rehypeRaw)
    .use(rehypeSanitize, { ...defaultSchema, clobberPrefix: prefix, strip: [...defaultSchema.strip, 'style'] })
    .use(fitNotesIntoPage, { base, prefix, localImages })
    .use(rehypeStringify)
    .processSync(markdown));
}

function fitNotesIntoPage({ base, prefix, localImages }) {
  return tree => {
    const elements = [];
    const collect = node => {
      if (node.type === 'element') elements.push(node);
      node.children?.forEach(collect);
    };
    collect(tree);
    const headings = elements.filter(node => /^h[1-6]$/.test(node.tagName));
    const shift = notesHeadingLevel - Math.min(...headings.map(node => Number(node.tagName[1])));
    for (const heading of headings) heading.tagName = `h${Math.min(6, Number(heading.tagName[1]) + shift)}`;
    for (const node of elements) {
      for (const attribute of ['href', 'src']) {
        const value = node.properties[attribute];
        if (typeof value !== 'string') continue;
        if (value.startsWith('#')) node.properties[attribute] = `#${prefix}${value.slice(1)}`;
        else if (URL.canParse(value, base)) {
          const url = new URL(value, base);
          node.properties[attribute] = localImages && attribute === 'src' && url.origin === new URL(base).origin
            ? `${url.pathname}${url.search}${url.hash}`
            : onFork(url.href);
        }
        else delete node.properties[attribute];
      }
    }
  };
}

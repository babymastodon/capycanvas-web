# Publish capycanvas.art with Cloudflare

Cloudflare serves the site, release downloads and DNS for `capycanvas.art`.
Porkbun remains the registrar. Every hostname except `www` is attached by
`wrangler`, which creates its DNS record; never point these names at another
host by hand.

| Hostname | Served by | Deployed with |
| --- | --- | --- |
| `capycanvas.art` | Worker `capycanvas-web`, static assets from `docs/` | Push to `main`, or `npm run deploy` |
| `www.capycanvas.art` | A redirect rule to the apex | Zone rules in the Cloudflare dashboard |
| `downloads.capycanvas.art` | R2 bucket `capycanvas-downloads` | `npm run publish:downloads` |
| `editor.capycanvas.art` | Worker `capycanvas-editor` | The **Deploy editor** workflow in [babymastodon/capycanvas-release](https://github.com/babymastodon/capycanvas-release) |
| `flatpak.capycanvas.art` | Worker `capycanvas-flatpak` | The **Publish release updates** workflow in [babymastodon/capycanvas](https://github.com/babymastodon/capycanvas) |

Other deploys run from a maintainer's machine. Log in once with `npx wrangler login`
as a member of the Cloudflare account that owns the `capycanvas.art` zone. If
that login can reach more than one account, set `CLOUDFLARE_ACCOUNT_ID` in your
own environment. No account IDs, API tokens or keys are stored in the repository.

## Deploy the site

Every push to `main` runs `.github/workflows/site.yml`: it copies new releases
with `npm run publish:downloads`, runs the build, output and browser checks,
then runs `npm run deploy:workers`, which uploads `docs/` to `capycanvas-web`.
Pull requests run the checks only.
Rerun a deploy with `gh workflow run site.yml --ref main`.

The copy and deploy steps read `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`
from the repository's `cloudflare` environment, which only `main` may use. The
token is an account API token from the **Edit Cloudflare Workers** template,
limited to this account and the `capycanvas.art` zone, with **Workers R2
Storage: Edit** for the downloads bucket and **Zone WAF: Edit** for the
downloads allowlist. To deploy from your own machine, set `CLOUDFLARE_API_TOKEN`
to such a token, then run `npm run publish:downloads` and `npm run deploy`,
which runs the same checks first. Never edit the generated HTML; `docs/` is ignored and every build
replaces it.

## After publishing a Capy Canvas release

The Download and Past versions pages are built from
`https://downloads.capycanvas.art/releases.json`; the Site workflow builds from
the copy `publish:downloads` just wrote, because the public one is cached for
five minutes. After publishing or editing a
release on GitHub, run the Site workflow so it copies the release and rebuilds
the site:

```sh
gh workflow run site.yml --ref main
```

`publish:downloads` lists the published releases of `babymastodon/capycanvas`
with `gh`, downloads each release missing from `releases.json`, checks every
file against GitHub's SHA-256 digest, uploads it to
`downloads.capycanvas.art/<tag>/<file>`, adds the bucket's files to the
downloads allowlist, then rewrites `releases.json` with download URLs on that
domain. Releases already listed keep their files and date
and take their notes and GitHub link from the current release. Drafts are never copied; the site also
hides pre-releases.

## Abuse and billing protection

Static assets are served without limits or charges. Requests that reach a
Worker or R2 can cost money, so the account and zone keep these settings:

- Workers stay on the Free plan, whose daily request limit fails requests
  instead of billing them. No Worker has code: the site, editor and Flatpak
  Workers serve static assets only, which are neither billed nor counted. Files
  over the 25 MiB asset limit (the editor's Wasm and large Flatpak objects) live
  under `downloads.capycanvas.art/editor/` and `/flatpak/`, reached by `_redirects`
  302s, so they share the download protections below. Keep `workers_dev` and `preview_urls` off and the
  R2 buckets' `r2.dev` URLs disabled, so every request passes the zone rules.
- A cache rule makes every `downloads.capycanvas.art` response cacheable and
  ignores query strings in the cache key.
- WAF custom rules let through only GET requests without a query string for
  files in the bucket, and block every other `downloads.capycanvas.art`
  request before it reaches R2, so R2 reads stay near one per file per
  Cloudflare data center however many requests arrive. HEAD skips the cache,
  so it is blocked too. `site/scripts/allow-downloads.mjs` writes the rules
  from the bucket listing, and every publisher (`publish:downloads`, Flatpak's
  `publish.sh` and the editor's `deploy.mjs`) runs it after uploading and
  before linking new files. The Free plan's five rules of 4,096 characters
  hold about 370 files; delete old releases from the bucket before that runs
  out. `releases.json` is cached for five minutes so that reading it cannot
  bypass the cache. Never link a download with a query string.
- A rate-limiting rule blocks an IP for 10 seconds after 30 requests in
  10 seconds to `downloads.capycanvas.art`.
- A response header rule adds `Access-Control-Allow-Origin: *` to
  `downloads.capycanvas.art/editor/` responses, cached ones included, so the
  editor can preload and fetch its Wasm across origins.
- A redirect rule sends `www.capycanvas.art` to the apex. Its DNS record is a
  proxied `AAAA 100::` placeholder, so nothing else answers `www`.
- Budget alerts email the account owner at $1 and $10 of usage charges.
- GitHub asks a maintainer to approve workflow runs from every outside
  contributor, so pull requests cannot spend Actions minutes unreviewed.

## Check

- `https://capycanvas.art/`, `/download/`, `/download/past-versions/`,
  `/download/ipad-beta/`, `/download/android-beta/` and `/docs/` in every
  locale, with language selection and both OS themes.
- `https://www.capycanvas.art/download/` redirects to `https://capycanvas.art/download/`.
- Download buttons fetch from `downloads.capycanvas.art`, and Linux uses
  `https://flatpak.capycanvas.art/capycanvas.flatpakref`.
- Demo opens `https://editor.capycanvas.art/`.

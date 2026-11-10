# Publish capycanvas.art with Cloudflare

Cloudflare serves the site, release downloads and DNS for `capycanvas.art`.
Porkbun remains the registrar. Every hostname is attached by `wrangler`, which
creates its DNS record; never point these names at another host by hand.

| Hostname | Served by | Deployed with |
| --- | --- | --- |
| `capycanvas.art` | Worker `capycanvas-web`, static assets from `docs/` | `npm run deploy` |
| `www.capycanvas.art` | Worker `capycanvas-www`, redirects to the apex | `npm run deploy` |
| `downloads.capycanvas.art` | R2 bucket `capycanvas-downloads` | `npm run publish:downloads` |
| `editor.capycanvas.art` | Worker `capycanvas-editor` | `node release/cloudflare/deploy.mjs` in [capyatelier/capycanvas-release](https://github.com/capyatelier/capycanvas-release) |
| `flatpak.capycanvas.art` | Worker `capycanvas-flatpak` | `bash packaging/flatpak/publish.sh` in [capyatelier/capycanvas](https://github.com/capyatelier/capycanvas) |

Deploys run from a maintainer's machine. Log in once with `npx wrangler login`
as a member of the Cloudflare account that owns the `capycanvas.art` zone. If
that login can reach more than one account, set `CLOUDFLARE_ACCOUNT_ID` in your
own environment. No account IDs, API tokens or keys are stored in the repository.

## Deploy the site

```sh
npm run deploy
```

This runs `npm run check`, then uploads `docs/` to `capycanvas-web` and deploys
the `www` redirect from `www/`. Never edit the generated HTML; `docs/` is ignored
and every build replaces it.

## After publishing a Capy Canvas release

The Download and Past versions pages are built from
`https://downloads.capycanvas.art/releases.json`. After publishing a release on
GitHub, copy it to R2 and rebuild the site:

```sh
npm run publish:downloads
npm run deploy
```

`publish:downloads` lists published releases with `gh`, downloads each release
missing from `releases.json`, checks every file against GitHub's SHA-256 digest,
uploads it to `downloads.capycanvas.art/<tag>/<file>`, then rewrites
`releases.json` with download URLs on that domain. Releases already listed are
not copied again. Drafts are never copied; the site also hides pre-releases.

## Check

- `https://capycanvas.art/`, `/download/`, `/download/past-versions/`,
  `/download/ipad-beta/`, `/download/android-beta/` and `/docs/` in every
  locale, with language selection and both OS themes.
- `https://www.capycanvas.art/download/` redirects to `https://capycanvas.art/download/`.
- Download buttons fetch from `downloads.capycanvas.art`, and Linux uses
  `https://flatpak.capycanvas.art/capycanvas.flatpakref`.
- Demo opens `https://editor.capycanvas.art/`.

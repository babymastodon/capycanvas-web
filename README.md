# Capy Canvas website

The static, localized website for **[capycanvas.art](https://capycanvas.art)**.
The drawing app lives in [capyatelier/capycanvas](https://github.com/capyatelier/capycanvas);
the Web Demo button opens [editor.capycanvas.art](https://editor.capycanvas.art).

## Develop

Node.js 22.12 or newer (Node 24 is used in CI).

```sh
npm ci                  # install the pinned build and test tools
npm run dev             # Astro development server
npm run build           # type-check and render site/ into docs/
npm test                # validate the generated output
npm run test:browser    # Chrome: desktop/tablet/mobile, both themes, all languages
npm run serve           # http://127.0.0.1:4321
```

`CHROME=/path/to/chromium npm run test:browser` selects a different Chromium
executable; the default is `google-chrome`. Browser checks launch their own
local server and save review screenshots to ignored `artifacts/review/`.

Edit source in `site/`. `docs/` is ignored build output that Astro replaces
completely on every build; the **Deploy site** workflow builds and publishes it to
GitHub Pages, with no server-side JavaScript, external fonts, or analytics.
The source is independent of the adjacent app repository except when explicitly
recapturing screenshots and reading published releases at build time.

The build reads the GitHub API, so it needs network access. Set `GITHUB_TOKEN`
to any GitHub token to avoid the anonymous rate limit; the workflows pass their own.
`RELEASES_FILE=tests/fixtures/releases.json npm run build` builds from a JSON file
shaped like the API response instead.

## Source structure

This is a plain Astro static site with the existing Capy Canvas theme.

- `site/astro.config.mjs`: output directory, Astro i18n routing, favicon and stylesheet versions,
  and copying the root license/branding notices into the build.
- `site/src/pages/`: static page routes, 404, robots.txt, and sitemap.
- `site/src/layouts/SiteLayout.astro`: shared document, metadata, and header.
- `site/src/components/`: header, language controls, and page components.
- `site/src/data/`: translations and installation instructions for all fifteen languages.
- `site/src/content/guides/`: one Markdown manual page per topic and language.
- `site/src/content/policies/`: the privacy policy in every language with a shared effective date.
- `site/src/content.config.ts`: typed Astro content collection schema.
- `site/src/layouts/DocsLayout.astro`: documentation sidebar, article area, and section links.
- `site/src/styles/documentation.css`: documentation styles using the existing editor palette.
- `site/src/lib/site.ts`: typed page/locale definitions and Astro locale URL helpers.
- `site/src/lib/releases.mjs`: reads Capy Canvas releases from GitHub, picks the offered
  files and renders sanitized release notes; `release-data.ts` loads them once per build.
- `site/src/scripts/pwa.js`: browser/OS detection and installation picker behavior.
- `site/public/assets/`: unchanged global CSS, brand assets, and app screenshots.
- `site/scripts/`: static preview server and Chrome/capture utilities.

Use shared components and the locale URL helper when adding pages. Astro processes
the components' browser scripts; the PWA script is only included on download pages.
The language-preference script runs inline in the head and offers a translated
page after the document loads, preserving the URL the reader requested.
There is no client router or UI framework runtime. Documentation uses Astro's Markdown
content collections, with complete HTML generated for every translated guide.
See [the documentation authoring guide](site/DOCUMENTATION.md) for the structure,
English-first editing, screenshots, and custom interactive components.

## Routes and languages

| Language | Code | Home |
| --- | --- | --- |
| English | `en` | `/` |
| 日本語 | `ja` | `/ja/` |
| 简体中文 | `zh` | `/zh/` |
| 繁體中文 | `zh-Hant` | `/zh-Hant/` |
| 한국어 | `ko` | `/ko/` |
| Español | `es` | `/es/` |
| Português (Brasil) | `pt-BR` | `/pt-BR/` |
| Bahasa Indonesia | `id` | `/id/` |
| Français | `fr` | `/fr/` |
| Deutsch | `de` | `/de/` |
| Русский | `ru` | `/ru/` |
| ไทย | `th` | `/th/` |
| Tiếng Việt | `vi` | `/vi/` |
| Türkçe | `tr` | `/tr/` |
| Italiano | `it` | `/it/` |

Download, past versions, the two beta sign-up pages, documentation, and privacy append
`download/`, `download/past-versions/`, `download/ipad-beta/`, `download/android-beta/`,
`docs/`, and `privacy/` to the language's home URL.
The Brazilian Portuguese path preserves `pt-BR` casing.

Manual pages extend the documentation route with the same topic path in every
locale, for example `/docs/layers/masks/` and `/ja/docs/layers/masks/`. The
sidebar groups them by chapter; related pages, section links and previous/next
links all point to static pages. The manual follows the app's areas, with two
tutorials, and is written to [site/WRITING.md](site/WRITING.md). Device-specific input notes
auto-detect the reader's platform and provide a manual selector; all variants are
present in the HTML and remain readable without JavaScript.

Astro's `i18n` configuration defines English as the unprefixed default and
all other languages under their locale codes. Navigation,
alternate links, the sitemap, and suggested translations use `astro:i18n` URL
helpers. Each translated page is generated as complete HTML.

Unprefixed entry pages suggest a translation from `navigator.languages`, trying
supported choices in preference order, without automatically redirecting.
Regional tags map to the corresponding translation;
Portuguese tags (including `pt`, `pt-PT`, and `pt-BR`) select Brazilian Portuguese.
Unsupported languages fall back to English. Chinese script preferences select
Simplified (`zh-Hans`) or Traditional (`zh-Hant`) Chinese. Without an explicit
script, Taiwan, Hong Kong and Macau preferences select Traditional Chinese;
other Chinese preferences select Simplified Chinese. An explicit script takes
priority over the region, so `zh-Hans-TW` still selects Simplified Chinese.
The language menu remembers
an explicit choice in local storage and preserves the current page. An explicit
translated URL takes priority over detection or a saved preference. `?lang=en`
forces English even when storage is unavailable. Without JavaScript all pages,
navigation, theme selection, and the language menu still work; language
suggestions and remembering a choice require JavaScript.

Astro's request-based `preferredLocale` detection needs a server. GitHub Pages
serves static files, so `LanguagePreference.astro` performs browser detection
using URLs generated by Astro. `LanguageMenu.astro` handles remembering a choice
and keyboard interaction. The browser tests cover both behaviors.

The browser's `prefers-color-scheme` selects the whole page palette and the
matching genuine app screenshots. Changes apply live. The home page contains a
workspace showcase, the original short description, three primary links, and
the language selector. Keep this minimal, viewport-sized design: the accessible
heading stays visually hidden, and the homepage has no extra content sections
or language suggestion outside the original menu. The document title describes
painting and photo editing, and `WebSite` structured data uses the localized app name
and its global search aliases. Homepage metadata and other pages’
language suggestions live in `site/src/data/home-content.mjs`.
The showcase is a slideshow that crossfades between real Sketch, Paint and
Photo screenshots every few seconds. A small indicator overlaid on the screenshot
names the current workspace and lets the reader jump to another; without JavaScript
it still switches slides with plain CSS. Astro generates WebP variants at 480,
960, 1440 and 1920 pixels for both themes. The first slide loads eagerly; other
slides preload after it decodes and the browser is idle. The showcase scales
to fit the viewport. Other pages have a small footer with a privacy link
and a Capy Atelier credit. All pages use borderless controls. Source translations live
in `site/src/data/content.mjs`; each language gets static HTML, appropriate metadata,
canonical and alternate links, and a sitemap entry.

## Localized app names

`site/src/data/branding.mjs` defines the approved names: カピカン for Japanese,
水豚画布 for Simplified Chinese, 水豚畫布 for Traditional Chinese,
카피 캔버스 for Korean, Капи Канвас for Russian, คาปิ แคนวาส for Thai,
and Capy Canvas for the other site languages. The `zh` route remains
Simplified Chinese; Traditional Chinese uses `zh-Hant`.

Write `{appName}` wherever the app is named in translation data, Markdown,
frontmatter, image descriptions or captions. Translate the surrounding words,
and keep the placeholder unchanged. Headers, page titles, accessibility labels
and search metadata use the same map; search aliases retain the global name.

Run `npm run check:branding` for a quick source check. The build runs it before
rendering, and `npm test` checks substitution and the published names. New
languages need an approved name in the map; an unknown locale fails instead of
using an English fallback. Adding a language also follows the existing route,
content and capture requirements.

## Downloads and past versions

The Download page and Past versions are built from the published
[Capy Canvas releases](https://github.com/capyatelier/capycanvas/releases).
Drafts are private and pre-releases are not offered, so both are skipped.
If the GitHub API request fails, the build fails rather than publishing pages
without the releases.

The Download page opens with a one-line beta note and a large button for the visitor's
detected system: the latest release's file (labelled with its version, platform and
variant, with the release date beneath), the beta sign-up on iPad and Android, or the web
app otherwise. Windows on Arm gets the Arm64 installer when a Chromium browser reports the
architecture; other browsers get x64. **Other platforms** lists every platform with a button
per option, named by its variant, followed by Past versions and the GitHub releases list,
then the web app instructions. Without JavaScript the button stays hidden. Past versions
lists every published release, newest first, with its date, files, a link to the release on
GitHub and its notes. Upcoming release notes are kept in
`site/src/content/releases/<version>.md`, with a `version` frontmatter field. They
appear above published releases with an **Upcoming** label, without a release date
or downloads. When that version is published on GitHub, its local upcoming entry
is hidden automatically. The Download page always uses published releases only.

Release assets are matched by exact name; Linux installation
uses the stable reference hosted on GitHub Pages:

| Platform | Variant | Asset |
| --- | --- | --- |
| Android | APK | `capycanvas-<version>-android.apk` |
| Linux | Flatpak | Pages `capycanvas.flatpakref` on Download, `capycanvas-<version>-linux-x86_64.flatpak` on Past versions |
| Windows | x64 | `capycanvas-<version>-windows-x64-setup.exe` |
| Windows | Arm64 | `capycanvas-<version>-windows-arm64-setup.exe` |
| macOS | Apple silicon | `capycanvas-<version>-macos-arm64.dmg` |

Both Linux Download buttons use
`https://capyatelier.github.io/capycanvas/capycanvas.flatpakref`. This stable reference
installs the newest release, so Past versions links each release's bundle instead.
AppImages from earlier releases, `SHA256SUMS`, the Microsoft
Store `.msix`, Google Play `.aab`, the Flatpak repository archive and the `.zip` archives
are left on GitHub. Until a release is published, Linux, Windows and macOS keep their
"Coming soon" status and the page links to the GitHub releases list.

The iPad and Android rows offer only **Join the beta**; Android APK downloads remain
available on Past versions. The button opens a short sign-up page:
`/download/ipad-beta/` (install TestFlight from its App Store button, open the
invitation, install) and
`/download/android-beta/` (join the Google Group, accept the Google Play test, install,
all with the tablet's Google account). The TestFlight, Google Group and Google Play test links are `betaLinks`
in `site/src/lib/site.ts`. Play Console's closed testing track (`alpha`) must list
`capycanvas-beta@googlegroups.com` under Google Groups and have a rolled-out release.
The website uses that closed test's package-based opt-in URL; group members must
accept the test with the same account they use in Google Play. Internal testing
uses a separate invitation and tester list.

Controls follow the editor's style: the 18px surface and 12px control radii become
squircles where the browser supports `corner-shape`, menus keep round 10px corners,
controls are 34px tall, and the selection colors and 8%/16% hover and pressed tints
come from the editor's theme (`apps/layer-web/style.css` in capyatelier/capycanvas).

Page text is translated in every language; release notes stay in English. They are
rendered from the release body's Markdown, or the upcoming Markdown file, and
sanitized with `rehype-sanitize`'s GitHub schema before being written into the page.
Headings in the notes are moved below the page's headings, relative links in
published notes resolve to GitHub, and in-page anchors are kept unique.
Use absolute `https://capycanvas.art/assets/releases/<version>/` image URLs in
upcoming notes so the body can also be used on GitHub. The website renders those
images from its own origin, including during local previews.

Tests build the site from `tests/fixtures/releases.json`, shaped like the GitHub API
response and including a draft, a pre-release and an unfinished upload, and from the empty
`tests/fixtures/no-releases.json`, into `artifacts/release-pages/`.

**After publishing a Capy Canvas release, run Actions › Deploy site** in this
repository (or `gh workflow run deploy.yml --repo capyatelier/capycanvas-web`)
so the Download page picks it up. The online editor at editor.capycanvas.art is
deployed separately, by **Actions › Deploy editor** in
[capyatelier/capycanvas-release](https://github.com/capyatelier/capycanvas-release).

## Web app installation instructions

The download page includes brief install instructions in `site/src/data/pwa-content.mjs`.
`site/src/scripts/pwa.js` uses browser/OS hints to select a guide, including desktop-mode
iPads and Android client hints. OS and browser pickers sit side by side; the OS
picker reuses the platform icons and supports keyboard navigation. Browser
choices update for the selected OS. This is guidance, not a capability check:
users can change either choice, and unknown combinations get a supported-browser
recommendation. Without JavaScript, a general guide remains visible. Only the
editor is installed; the marketing site has no service worker or install prompt.

The editor's package precaches its runtime for offline use and updates itself on
a normal refresh. It keeps recovery copies of unsaved drawings in browser storage,
which is not the same as saving a `.capy` file.

Browser instructions were checked against these upstream sources on 2026-09-08:

- Chrome: [computer](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DDesktop), [Android](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DAndroid), [iPhone/iPad](https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DiOS).
- [Microsoft Edge](https://support.microsoft.com/en-us/edge/install-manage-or-uninstall-apps-in-microsoft-edge).
- Safari: [Mac (macOS 14+)](https://support.apple.com/en-us/104996), [iPhone/iPad](https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios).
- Firefox: [Windows (143+, or 150+ for Microsoft Store installs)](https://support.mozilla.org/en-US/kb/web-apps-firefox-windows), [Android](https://support.mozilla.org/en-US/kb/use-web-apps-firefox-android). Firefox on Mac/Linux currently receives Chrome instructions.

Unit tests cover browser/OS detection; Chrome browser tests exercise the rendered
guides using those hints in all supported locales. Those checks validate the website's
instructions, not native install dialogs on each operating system.

## Regenerate screenshots

```sh
APP_REPO=../capycanvas APP_REVISION=origin/main npm run capture:prepare
npm run capture
npm run check
```

The capture pipeline builds a tracked product revision in an isolated directory,
then uses headed Chrome on private Wayland displays on Linux, one browser per
chapter, with six chapters running at a time by default. It drives the real
editor and saves light and dark images in every site language, switching the
editor's language in place for each shot, cropped to the panel, bar, menu or
dialog each section describes, at twice the pixel density. The illustration
tutorial is drawn through editor actions and browser pen input and saved as the
downloadable `.capy` examples. Pin
`APP_REVISION` to the app revision the manual describes. The homepage slides can
come from a newer revision with `CAPTURE_ONLY=showcase`; `capture.json` records
the revision of every image.

See [the capture guide](site/scripts/capture/README.md) for dependencies,
recipes, developing one chapter, and provenance. The adjacent product checkout is
not modified. Each language's pages and homepage show the editor in that
language, with translated alt text and captions.

Native GTK screenshots for Linux software centers come from the app's own capture
helper and are published under `/store/gtk/`; see
[the software center screenshot guide](site/scripts/store/README.md).

The documentation overview uses 1080p Sketch, Paint and Photo demonstrations in every
language and both themes, with silent automatic loops and no visible playback controls.
Only the visible variant loads; reduced motion keeps the clean still image.
See [the capture guide](site/scripts/capture/README.md#sketch-paint-and-photo-demonstrations)
for recording and publishing the videos. The homepage plays the opening of the
same Paint, Sketch and Photo videos; store heroes stay static.

Google Play listing assets and the manual publishing workflow are documented in
[the Google Play listing guide](store/google-play/README.md).

## Migration comparisons

`npm run test:migration` compares a reference build with the current `docs/`
in the same Chrome process. It checks screenshot pixels and rendered content,
links, and accessibility attributes across 270 views: all four languages,
both themes, seven viewport sizes, open menus, alternate installation guides,
404 pages, and pages with JavaScript disabled. Screenshots and a JSON report are
written to ignored `artifacts/migration/comparison/`.

To recreate the reference from the last commit before the Astro migration:

```sh
mkdir -p artifacts/migration/legacy
git archive 13dd245 docs | tar -x --strip-components=1 -C artifacts/migration/legacy
npm run build
npm run test:migration
```

For later comparisons, set `BASELINE_OUTPUT` to a saved build directory and
optionally `SITE_OUTPUT` to the candidate build. Both browser suites accept
`CHROME`; the regular browser and output tests also accept `SITE_OUTPUT`.
Pixel comparisons should use the same machine and fonts for both builds.
The documentation redesign intentionally differs from the pre-Astro reference;
use a current reference build when checking subsequent visual regressions.

## Publish

The **Deploy site** workflow (`.github/workflows/deploy.yml`) runs on every push to
`main` and from **Actions › Deploy site › Run workflow**. It runs the build, output
and browser checks, then publishes `docs/` with GitHub Pages' Actions deployment.
It needs no secrets. Pull requests run the same checks in **Verify site**.
See [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Pages, Porkbun, and Cloudflare setup.

The public documentation route is `/docs/`.
The former `/documentation/` URLs and retired topic paths redirect to the
matching `/docs/` pages in every language. The build directory is also named `docs/`,
so the documentation landing page is built to `docs/docs/index.html`.

## License

Original software, text, and non-brand assets: **MIT OR Apache-2.0**.
Names and the capybara mark have separate [branding terms](BRANDING.md).
See [LICENSE](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md).

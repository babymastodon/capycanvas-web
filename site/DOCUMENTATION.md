# Maintaining the documentation

The manual is an Astro content collection in `src/content/guides/`. It describes
the Capy Canvas editor at the app revision recorded in
`public/assets/capture.json` (currently 8261dd86a2, after v1.0.14). Release
availability must agree with the download page.

Read [WRITING.md](WRITING.md) before writing or reviewing a page. It sets the
audience, the page and section structure, the words to use and avoid, the tone,
and the review checklist every English page passes before it is published.

## Structure

The manual is organized like the app: a page covers one place in the app (a
panel, a tool, a menu, a dialog or a settings group), and each `##` section
covers one feature there. Two tutorials follow complete projects.

`src/data/docs-nav.mjs` lists the chapters (`docGroups`), every page in sidebar
order (`docTopics`), and the redirects from retired paths (`docRedirects`):

| Chapter | Pages |
| --- | --- |
| Getting started | Quickstart, Workspaces, Viewing the canvas, Command search, Undo and redo |
| Files | New drawings, Opening and saving, Exporting |
| Drawing tools | Brush tools, Blend and Liquify, Fill, Gradient, Figure, Rulers and guides |
| Brush settings | Size, opacity and flow; Tip and texture; Mixing, bleed and bristles; Resetting brushes |
| Color | Color panel, Edit Color, Palettes, Eyedropper |
| Layers | Layers panel, Layer types, Vector layers, Editing paths, Working with layers, Layer settings, Blend modes, Masks, Merging |
| Filters | How filters apply, Adding filters, and five filter references by category |
| Selections | Selection tools, Working with selections, Quick Mask, Selection layers, Select by brightness |
| Transform and image | Move and Transform, Crop, Image size and rotation, Copy and paste |
| Retouching | Clone and heal, Dodge and burn |
| Color management | Color spaces, Proof, HDR |
| Customizing | Panels, Toolbars and title bar, Tool bubbles, Workspaces, Zen mode, Preferences |
| Input | Pen, Pen pressure, Pen tilt, Touch gestures, Keyboard shortcuts |
| Illustration tutorial | Introduction, then sketching, line art, base colors and rendering |
| Photo editing tutorial | Introduction, then opening and cropping, retouching, adjusting and exporting |

Paths are stable and language-independent. When a page moves or is merged, add
its former path to `docRedirects`; the build writes a redirect page for it under
`/docs/` and the older `/documentation/` prefix in every language.

The overview (`components/Documentation.astro`, copy in `src/data/docs-ui.mjs`)
uses the author's Sketch, Paint and Photo stories in every language. Each
section opens with its workspace image, followed by the title and story. Sketch,
Paint and Photo use silent, automatic WebM loops with no visible controls. Sketch shows
how to place the tool bubbles, enter Zen mode, choose a green Blotty Ink brush and
adjust its hardness. Paint blends the sky with Painterly Blender and Crystal
Blender, then adds Posterize, Crosshatch and Glass from the Filters panel. Photo
hides a logo with the Clone Stamp, cuts the terrarium out onto a sage gradient, adds
Film Grain, Vignette, Split Tone and Clarity, then softens a cast shadow with masked
Gaussian Blur. Each
video uses the page's language and appearance. It loads when the image comes into
view and pauses offscreen or in a hidden tab. Reduced motion, disabled JavaScript
and playback errors keep the clean workspace still.
The closing statement and guide links sit side by side when space allows and
stack on narrow screens. The English page also includes the README Tools table. Its
personal voice follows the app README; the lookup rules in WRITING.md apply to
manual pages. Translations preserve the stories and guide destinations, using
localized link titles, image descriptions and editor screenshots.

## Pages

Each page is `src/content/guides/<locale>/<slug>.md`:

```markdown
---
title: "Layer settings"
description: "The switches that lock, clip and reference a layer, and its color mode."
related: ["layers/panel", "layers/masks"]
---

You can change how a layer behaves in the Layers panel header and the layer's menu.

![The Layers panel header with the layer switches.](shot:layers/settings-header)

## Clip to Layer Below

…
```

Frontmatter values are JSON on one line and are validated by
`src/content.config.ts`. The layout supplies the H1 from `title`, the
"On this page" list from the `##` headings, the related links and the
previous/next links. Tutorial introductions add `navTitle: "Introduction"`.
Link to pages with absolute paths (`/docs/layers/masks/`), never to heading
anchors: headings are translated, so anchors differ between languages.
Downloadable example files are linked with the HTML `download` attribute.

## Images

Write a capture as a Markdown image with the `shot:` scheme. The alt text is
required; a title becomes the caption and lists numbered callouts in order:

```markdown
![The Layers panel.](shot:layers/panel "1 Header · 2 Layer rows · 3 Footer buttons")
```

`src/lib/shots.mjs` turns it into a figure that follows the reader's light or dark
appearance and shows the editor in the page's language, using the file and size
recorded in `capture.json`; the build fails if a capture is missing in any
language. Every capture comes from the real editor, cropped to the panel, bar,
menu or dialog the section describes. See
[the capture guide](scripts/capture/README.md).

## English first, then translations

1. Write or change the English page following WRITING.md.
2. Review it against WRITING.md section 11. A second reader who did not write the
   page does the review and fixes every failure. `npm test` also runs the
   mechanical checks in `tests/writing.test.mjs`.
3. Capture or update its images. One run captures them in every language.
4. Translate the changed page into every language. Keep `{appName}` unchanged
   in body text and frontmatter; the build supplies each language's approved name.
   `npm run check:branding` rejects literal names and missing brand placeholders.

Translations use the app's own interface labels for that language, word for word:
look up the English label in the app's `assets/locales/en/*.ftl` and use the same
message in `assets/locales/<locale>/` (the site's `zh` is the app's `zh-Hans`,
and `zh-Hant` uses the app's Traditional Chinese catalog).
A label the app doesn't translate stays in English. Keep keys, file names, `shot:`
references and the example files' layer names unchanged, and prefix internal links
with the locale (`/ja/docs/layers/masks/`). Tests check that each translation has
the same captures and links as the English page, and that its images show the
editor in that language with the callouts its caption numbers.

## Validate and publish

Run `npm run check` from the repository root. It type-checks and builds Astro,
validates the published HTML, checks captures and their provenance, runs the
writing checks, and checks layouts, themes, languages, device notes, keyboard
navigation and no-JavaScript behavior in Chrome. Inspect `artifacts/review/` when
changing layouts or content. Commit the `site/` sources and publish with
`npm run deploy`, which builds `docs/` and publishes it to Cloudflare.

Custom page behavior belongs in a small Astro component with a processed browser
script. `PlatformNotes.astro` shows the pattern: detect the reader's device, let
them change it, remember the choice, and keep every variant in the static HTML.
Reading a page never starts the editor or needs WebGPU.

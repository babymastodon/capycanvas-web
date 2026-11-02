# Reproduce the editor screenshots

Run from the website repository root. Documentation and homepage screenshots are
Capy Canvas renders from the web editor, captured in a 1920 × 1080 window at twice
the pixel density, in both light and dark appearances and in every site language,
with the editor showing that language. Most images are cropped to the panel, bar,
menu or dialog a section describes; the workspace overviews show the whole window.

## Prepare and capture

Requirements: Node 24, the product's Rust/Wasm build dependencies, Chrome with
hardware WebGPU, and (on Linux) Mutter and `dbus-run-session`. Install website
dependencies with `npm ci`.

```sh
# Build the app revision in an isolated copy of the app repository.
APP_REPO=../capycanvas APP_REVISION=origin/main npm run capture:prepare
npm run capture
npm run check
```

`capture:prepare` archives the selected tracked revision into ignored
`artifacts/capture-app/<revision>/`, builds there, and records the prepared package
in `artifacts/capture-app.json`. It never changes the product checkout.
`CAPTURE_APP_DIR` and `CAPTURE_TARGET_DIR` select other staging and Cargo-cache
directories.

On Linux, `capture` launches **headed Chrome** on private headless Wayland
displays, which keeps the WebGPU surface on NVIDIA. It opens no window on the
desktop. Each chapter runs in its own fresh browser on its own display;
`CAPTURE_JOBS` (default 6) sets how many run together. Lower concurrency keeps
private displays and browsers within the host's file-watcher limits. `CHROME` selects
another executable; `CAPTURE_BROWSER_MODE=native` uses Chrome's own headless mode
where it renders WebGPU correctly.

## Recipes

`docs/index.mjs` lists one recipe per chapter. The illustration chapter draws
the tutorial study with real pen input and saves the downloadable examples;
other chapters get them with `example(name)`, which waits for that chapter.
The `toolExamples` chapter draws colored bands and applies Bristle Blender,
Dither Blender, Marbling, Liquify Edge, and Liquify Reconstruct. These images
show the original paint at the left and the result at the right.
`showcase.mjs` stages the homepage slides from the scenes in
`showcase-scenes.mjs`, which the [software center screenshots](../store/README.md)
share. The website's Photo slide instead runs the Photo demo's own setup, so the
still matches the first frame of its video.

- `editor.mjs` drives the editor through its own actions, commands, clicks and
  pen events. The browser file picker is replaced with an in-memory store so
  saving and opening never block on an OS dialog; the app still writes and reads
  its real `.capy` and image bytes.
- `shoot.mjs` captures each shot once per theme and language as WebP, at quality
  70 for manual images and 90 for the homepage slides and documentation
  overview, cropped to the
  union of CSS selectors, document rectangles or window rectangles. A recipe opens
  menus and dialogs in `setup` and closes them in `teardown`, because the
  appearance switch can close them; both run once per theme with the editor in
  English, and `ready` waits for a state such as the canvas bar being shown. The
  shot then switches the editor language in place for each site language, which
  keeps the drawing, selection, open menus and dialogs, and measures the crop and
  callouts again, because labels change length. Selector targets are found once in
  English and the same elements are measured in every language. `target` may be a
  function, and `variant`, `check` and `release` run in every language, for
  anything measured from the layout, typed in the artist's language, or held
  during the shot.
- `languages.mjs` switches languages as the browser does (`navigator.languages`
  and `languagechange`, with the editor's language left on System). The editor
  keeps default layer, palette and swatch names (*Paper*, *Layer 7*, *Curves*,
  *Ocean Study*) in the language they were created in, so a shot renames the
  ones visible in its crop to the editor's own names for each language and
  restores them afterwards. Layer names are restored with Undo; the capture fails
  if the Redo this leaves would be visible in a later image. Names the recipes
  type (*Ribbon*, *Line art*) and text the editor always shows in English stay as
  they are. `message(key, locale)` reads an editor string for text a recipe types
  in the artist's language.
- `annotations.mjs` draws numbered outlines over measured controls for images with
  callouts. Numbers match the image caption in the page.
- `docs/illustration.mjs` defines the original abstract study (a teal ribbon, an
  ochre disc and a terracotta block) and the tutorial's four stages.
- `photo/terrarium.jpg` is a photograph supplied by Capy Atelier for the photo
  tutorial and photo features, resized with its metadata removed.
- `showcase/spring.png` (an ink drawing), `showcase/house.png` (an oil painting)
  and `showcase/NDF_4717.jpg` (the terrarium photograph at full size) are supplied
  by Capy Atelier for the Sketch, Paint and Photo slides on the homepage.

Never fake UI: no injected controls, CSS overrides or replaced pixels. Reach every
state through the app. Wait on app state or events, never on fixed delays.

Before the first chapter, the capture checks that Japanese, Chinese, Korean and
Thai interface text renders with real glyphs (Noto Sans CJK and Noto Sans Thai on
Linux).

## Develop one chapter

`CAPTURE_ONLY` runs selected chapters; `CAPTURE_OUTPUT` and `CAPTURE_REVIEW` keep
the results out of the published assets, so several chapters can be developed at
once:

```sh
CAPTURE_ONLY=layers CAPTURE_OUTPUT=/tmp/capture/layers CAPTURE_REVIEW=/tmp/capture/layers-review npm run capture
```

`CAPTURE_EXAMPLES` can point to freshly generated tutorial projects when testing a
chapter against an app revision that cannot open the committed example format.
The full run creates its own current-format examples in the illustration chapter.

A failed chapter does not stop the others and is retried once in a fresh
browser, except the illustration chapter, which the others depend on. The review
directory holds a screenshot, the editor state and browser errors for each failed
attempt, and `timings.json` with the time of each chapter and the retries. A partial run is marked `partial`
and must not be published; run every chapter with `npm run capture` before
committing.

## Outputs and provenance

Commit the recipes and these public assets:

- `public/assets/docs/<locale>/<chapter>/<name>-{light,dark}.webp`: every manual
  image, per site language (`en`, `ja`, `zh`, … `it`).
- `public/assets/guides/<locale>/illustration-{light,dark}.webp`: the documentation overview.
- `public/assets/showcase/<locale>/`: the homepage slides.
- `<area>/shared/…`: an image that came out identical in every language, such as
  a crop of the canvas alone, stored once.

A run keeps a committed image when the new capture has the same size, quality
and callouts and its pixels match within a small tolerance (no channel off by
more than 32, mean difference under 1). Only images that really changed are
rewritten, so a recapture doesn't add every image to the repository again.
- `public/assets/examples/`: the four tutorial projects and the exported study.
- `public/assets/capture.json`: for each image its shot, theme, languages and app
  revision; the source hashes and browser version for each revision, recipe
  hashes, image sizes and hashes, callout bounds, and example hashes. The site
  looks up each page's images here (`src/lib/captures.mjs`).

The manual's images all come from one app revision. The homepage slides can
come from a newer one: prepare that revision and run
`CAPTURE_ONLY=showcase npm run capture`. `CAPTURE_SCENES=paint` (a comma
list of `sketch`, `paint`, `photo`) captures only those slides, so each slide's
still can match the app revision of its demo video. The other images are kept as long as
their files are unchanged; otherwise the run is marked `partial`. After each language
switch the Paint slide leaves Paint and comes back, which lays the panels out as a fresh
start in that language does, so the still matches the first frame of its demo video.
Panel heights can otherwise depend on the languages shown before.

Reproduction means the same source, actions, artwork and composition. GPU, fonts,
Chrome versions and input timing can change individual bytes, so review new
images rather than expecting identical output.

## Sketch, Paint and Photo demonstrations

The documentation overview's Sketch, Paint and Photo loops are real 1920 × 1080 editor
recordings at 24 fps, with a filled circular pointer over trusted browser input.

Sketch: `demo/motion.mjs` defines the paths, timing and short reading pauses in
`capture-demo.mjs`. The color wheel is Medium; the sequence selects leaf green
and Blotty Ink, then shows the live tip during a hardness adjustment.

Paint: `capture-paint-demo.mjs` opens `showcase/house.png` with Loaded Oil,
switches to Blend, sets Painterly Blender to about 592 px and Crystal Blender to
about 411 px with the Tool panel slider, and replays recorded pen strokes over
the blue and pink sky. `demo/paint-strokes.json` holds those strokes in document
coordinates with their timing, calibrated pressure and tilt, so they replay at
any zoom; `demo/paint-motion.mjs` defines the travel between them. Hide cursor when
painting is turned off so the brush outline stays visible during strokes. The
finger then swipes the Tool Set column closed, opens Filters beside Layers, raises
that panel, searches for Posterize, Crosshatch and Glass, taps Distortion to double
it, and swipes Posterize away in Layers. Controls use mouse input, the Tool Set
scroll and layer swipe use touch (rows only swipe for direct contact), and
strokes use pen input. Filters without animation keep the loop small.

Photo: `capture-photo-demo.mjs` opens `showcase/NDF_4717.jpg` and, before
recording, saves the terrarium as a Subject selection layer from a tonal range
plus the polygons in `demo/photo-journey.mjs` and `demo/photo-outline.json`.
`photo-journey.mjs` then holds Alt to set the Clone Stamp source and paints one
stroke over the logo, masks the photo with Subject, picks two sage colors on the
wheel for a radial Gradient on a new layer, shrinks the photo with Transform, adds
Film Grain (45 %, 5 px, not animated), Vignette, Split Tone and Clarity, and builds
the shadow: a skewed Pine Shadow fill set to Multiply at 42 %, a feathered contact
ellipse, and two Gaussian Blur filters added from the selection bar's Adjust menu
over feathered rectangles, so the shadow stays crisp at the base. Sliders are
dragged, never typed. It ends on the Move tool and holds 3 seconds. Record it with
an app revision whose Film Grain inserts without animation and whose Gaussian Blur
starts at 20 px (capycanvas dda0ac1ea or later). `DEMO_THROUGH=color-matched` stops
3 seconds after Clarity without the closing dissolve, for the app README's
animated WebP; its results go to `artifacts/photo-demos/<locale>-<theme>-through-color-matched/`.

Install FFmpeg with VP9 support as well as the capture requirements above.
Capture each site locale and both themes, then review and publish the complete set:

```sh
DEMO_LOCALE=ja DEMO_THEME=dark npm run capture:demo
DEMO_LOCALE=ja DEMO_THEME=dark npm run capture:demo:paint
DEMO_LOCALE=ja DEMO_THEME=dark npm run capture:demo:photo
npm run capture:demo:publish
npm run check
```

`DEMO_LOCALE` defaults to `en` and `DEMO_THEME` to `light`. Results go to
`artifacts/sketch-demos/<locale>-<theme>/`, `artifacts/paint-demos/<locale>-<theme>/` and
`artifacts/photo-demos/<locale>-<theme>/`;
`DEMO_OUTPUT` selects another path. Raw PNG frames are removed after encoding
unless `DEMO_KEEP_FRAMES=1`. Sketch uses VP9 quality 24, Paint and Photo quality 30
with a 1.4 Mbit/s cap, all with a long keyframe interval to keep static artwork
small and a short dissolve back to the original hero at the loop end.
The publisher requires every locale/theme pair of every demo, checks the codec,
absence of audio, dimensions, frame rate, duration and size with FFprobe, then
writes `public/assets/demos/` and its source/hash manifest. The manifest also
records where each homepage clip ends: after the pink sky in Paint, after leaf
green in Sketch and after Clarity in Photo. The homepage plays those openings from the same files, so a
reader who opens both pages downloads each video once.
`SKETCH_DEMO_DIRECTORY`, `PAINT_DEMO_DIRECTORY` and `PHOTO_DEMO_DIRECTORY` select
other capture sets, so one demo can be republished with the others' approved captures. Keep homepage
and store stills free of tool bubbles.

## Release visual

After preparing the app, run `RELEASE_VERSION=1.0.13 npm run capture:release`.
The script draws Charcoal on Unryu, Pointy Pencil on Handmade, Pastel Block on
Sanded, and Crayon on Linen through real pen input with varying pressure and
tilt. It exports each sample through the editor and arranges the PNGs with tool
and paper labels. The paper colors are set in the editor. It adds no paper
texture or marks after export.

`release-visual.mjs` defines the composition; `dry-media.mjs` defines the strokes
and materials. Working PNGs and editable projects go to
`artifacts/release/visual/`. The final PNG, WebP, and source manifest go to
`site/public/assets/releases/<version>/`; `RELEASE_VISUAL_OUTPUT` selects another
destination. Inspect the composite at release-note width before publishing.

The published 1.0.13 visual uses native canvas captures to retain paper lighting.
Build a clean native app checkout using the
[native capture guide](../store/README.md), then render the saved projects and
compose their paper crops:

```sh
NATIVE_APP_REPO=/path/to/clean/app NATIVE_EXECUTABLE=/path/to/native/test-executable npm run capture:release:native
RELEASE_VISUAL_SAMPLES=artifacts/release/native-visual node site/scripts/release-visual.mjs
```

The native script uses the app's capture helper, crops only the paper using the
recorded camera and window bounds, and verifies the project and image hashes.
It runs one sample at a time by default; `NATIVE_VISUAL_JOBS` changes
concurrency. The second command can also be used to iterate on the composition
without drawing or capturing the samples again.

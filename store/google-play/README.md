# Google Play listing

`en-US/` contains the listing copy, 512 × 512 icon, 1024 × 500 feature graphic,
and seven screenshots per layout. `manifest.json` records image integrity and
capture provenance. Upload screenshots in numbered order.

The native Android screenshots use the same three artworks as the website.
They were captured on a Wacom MovinkPad Pro 14 with a hardware Vulkan GPU.
Phone, seven-inch tablet, and desktop layouts use Android resolution and density
overrides on that tablet; these do not verify other physical hardware or Android
desktop windowing. Both light and dark themes are included. The feature graphic
composes the native Paint screenshot with the capybara mark and muted typography.

| Console slot | Directory | Size |
| --- | --- | --- |
| Phone | `en-US/phone/` | 1920 × 1080 |
| 7-inch tablet | `en-US/tablet-7-inch/` | 1920 × 1080 |
| 10-inch tablet | `en-US/tablet-10-inch/` | 2560 × 1440 |
| Desktop | `en-US/desktop/` | 3840 × 2160 |

All screenshots are opaque PNGs under 8 MB. Desktop screenshots require manual
Console upload because Google's documented image API does not expose that slot.
No video or verified XR capture is supplied; leave those optional fields empty.

## Publish

Run **Actions → Publish Google Play listing** on `main`. Select `validate` to
upload and check a temporary API edit, which is discarded after validation.
Select `publish` to commit the verified edit for Google review. The workflow
changes the English text, icon, feature graphic, and phone/tablet screenshots
for `art.capycanvas.editor`; it preserves any existing video URL.

```sh
node site/scripts/store/google-play.mjs check
node --test tests/google-play.test.mjs
gh workflow run google-play.yml --repo babymastodon/capycanvas-web -f mode=publish
```

The `google-play` GitHub environment permits only `main` and holds two variables:
`GCP_WORKLOAD_IDENTITY_PROVIDER` and `GCP_SERVICE_ACCOUNT`. The provider must trust
only this repository's numeric ID, the `google-play` environment, and `main`.
Its service account must be invited to Play Console with **Manage store presence**
permission for Capy Canvas. Authentication uses Workload Identity Federation;
no private JSON key is needed.

The publisher checks image hashes, verifies uploaded image order and listing
text, and validates the API edit before committing. It refuses to cancel a
review already in progress. Google may include other pending Console changes
when committing an edit: coordinate listing publication with Console edits.
A successful commit is not proof of review approval or public availability.
The workflow saves the previous listing, previous image URLs, uploaded hashes,
and edit result in the `google-play-publish` run artifact.

Capture sources and raw state snapshots remain local artifacts in
`capycanvas3/artifacts/play-store-capture/`; the website's
`artifacts/google-play/` holds the complete local upload pack and source copies.
When replacing images, update their manifest hashes and visually review every
variant before publishing. Do not include keys, tokens, or API reports here.

Google references: [API setup](https://developers.google.com/android-publisher/getting_started),
[image slots](https://developers.google.com/android-publisher/api-ref/rest/v3/AppImageType),
[edit behavior](https://developers.google.com/android-publisher/concurrency-considerations).

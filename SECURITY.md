# Security policy

Use [private vulnerability reporting](https://github.com/babymastodon/capycanvas-web/security/advisories/new)
for security problems in the website and its deployment tooling. Include the
relevant commit or URL, impact, and steps to reproduce without credentials or
personal data. Keep vulnerability details out of public issues until a fix and
disclosure have been coordinated.

For security problems in the drawing application itself, follow the
[Capy Canvas security policy](https://github.com/babymastodon/capycanvas/blob/main/SECURITY.md).
Ordinary bugs and feature requests belong in public issues.

GitHub secret scanning, push protection, Dependabot security updates and private
vulnerability reporting are enabled. The `Protect main history` ruleset blocks
deleting or force-pushing `main` while allowing normal fast-forward updates.
[Dependabot](.github/dependabot.yml) checks pinned GitHub Actions weekly; review
its pull requests and their checks before merging.

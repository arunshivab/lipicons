# Changelog

All notable changes to LiPicons.

## [1.0.2] — 2026-05-17

### Added
- **`LiPicons.Blazor` NuGet package** (`src/LiPicons.Blazor`) — a `net10.0` Razor component, `<LipiIcon Name="…" Variant="…"/>`, rendering any of the 1,149 icons × 6 variants. The manifest is embedded in the assembly, so icons render fully offline (no `wwwroot` copy, no CDN fetch) — built for hospital-firewall deployment. Includes strongly-typed `LipiconName` constants and a bUnit test suite. Renderer is a byte-faithful port of `scripts/build.mjs`.
- **Showcase site** at `index.html` — searchable, browsable catalogue of all 1,149 icons across 6 variants. Loads from `./dist/json/icons.json`. Click any icon for code snippets (Inline SVG · HTML+JS · Direct URL · Blazor preview · React preview) and one-click download. Designed to be published via GitHub Pages at `arunshivab.github.io/lipicons/`.

### Fixed
- Build script now reads its version from `package.json` instead of a hardcoded string, so the manifest version can never drift from the package version again.

## [1.0.1] — 2026-05-17

### Fixed
- **Sprite XML parse error** in `lipicons.fill.svg` and `lipicons.duotone.svg`. ~519 icons (`more-horizontal`, `info`, `warning`, dotted indicators) had baked-in `fill="currentColor"` on inner circles. The fill/duotone renderer was naively prepending another `fill` attribute, producing duplicate XML attributes that strict parsers rejected. Build now strips existing fill/stroke before applying variant attrs.

## [1.0.0] — 2026-05-17

### First public release

- **1,149 hand-drawn icons** across 115 categories on a 24×24 grid
- **6 variants**: Regular, Bold, Light, Thin, Fill, Duotone
- **SVG sprite** as primary delivery — `dist/lipicons{.variant}.svg`
- **JSON manifest** — `dist/json/icons.json`
- **No npm dependencies** — build script uses only Node built-ins
- **Free for LiPi partners & friends** under the imagiQa Partner Licence v1
- **CDN**: served via jsDelivr from GitHub tags

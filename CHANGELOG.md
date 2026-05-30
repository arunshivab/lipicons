# Changelog

All notable changes to LiPicons.

## [1.0.4] — 2026-05-31

### Added
- **10 new `ui` icons**: `unlock`, `circle` (radio off), `radio` (radio on), `plus-circle`, `minus-circle`, `log-out`, `log-in`, `chevrons-left`, `chevrons-right`, `sliders`. Closes the remaining broken pairs (lock/unlock, the radio set matching the checkbox set) and adds auth + pagination + filter-control primitives.

### Fixed
- **Name collision on `eye`** — the `ui` visibility icon (pairs with `eye-off`) was being shadowed by a clinical eye in the ophthalmology phase, so `eye` resolved to `ophth` and the visibility icon was unreachable. The clinical icon is now **`eye-anatomy`** (`ophth`); `eye` is restored as the `ui` visibility icon. (`ophthalmology` / `ophthalmology-detail` remain unchanged.)

Total icon count **1,153 → 1,164**.

## [1.0.3] — 2026-05-31

### Added
- **4 selection-control icons** in the `ui` category: `square`, `check-square`, `minus`, `circle-x`. Completes the checkbox/indeterminate/clear set (pairs with the existing `check`, `check-circle`, `plus`, `close`). Total icon count **1,149 → 1,153**. Source in `src/lipi-icons-data.js`; sprites + `dist/json/icons.json` regenerated.

## [1.0.2] — 2026-05-17

### Added
- **Showcase site** at `index.html` — searchable, browsable catalogue of all 1,149 icons across 6 variants. Loads from `./dist/json/icons.json`. Click any icon for code snippets (Inline SVG · HTML+JS · Direct URL · Blazor preview · React preview) and one-click download. Designed to be published via GitHub Pages at `arunshivab.github.io/lipicons/`.

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

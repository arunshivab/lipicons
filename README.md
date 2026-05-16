# LiPicons

> Hand-drawn icon system for Hospital Information Systems
> **1149** icons · **115** categories · **6** variants · by **imagiQa**

A free, hand-crafted icon family designed for HIS, EMR, RIS, LIS, pharmacy,
laboratory, billing, and adjacent healthcare software. Every icon is drawn
on a 24×24 grid with a 1.75 px stroke; `currentColor` lets CSS / parent
context decide the tint.

## Variants

| Variant   | Stroke | Notes |
| --------- | ------ | --------------------------------- |
| Regular   | 1.75   | The everyday weight |
| Bold      | 2.25   | Emphasis, primary CTAs |
| Light     | 1.25   | Dense layouts, secondary nav |
| Thin      | 1.0    | Marketing, hero illustrations |
| Fill      | —      | Solid silhouette |
| Duotone   | 1.5    | Stroke + 22% currentColor fill |

(Colour variant deferred to v1.1.)

## Use via CDN (no install)

Drop a single icon into any HTML page:

```html
<svg width="24" height="24">
  <use href="https://cdn.jsdelivr.net/gh/arunshivab/lipicons@v1.0.0/dist/lipicons.duotone.svg#heart-pulse" />
</svg>
```

Or pull one SVG file:

```
https://cdn.jsdelivr.net/gh/arunshivab/lipicons@v1.0.0/dist/svg/regular/heart-pulse.svg
```

## Use via JSON manifest

```
https://cdn.jsdelivr.net/gh/arunshivab/lipicons@v1.0.0/dist/json/icons.json
```

Every icon as `{ cat, keywords, paths }` — pull and render in any framework.

## Rebuild from source

```bash
npm run build           # regenerates dist/svg/{variant}/{name}.svg
npm run build:sprite    # regenerates dist/lipicons*.svg sprites
```

No npm dependencies — uses only Node's built-in modules. Requires Node ≥ 18.

## Licence

See [LICENSE](./LICENSE). Free for LiPi partners & friends, personal /
educational / non-commercial use. Commercial relicensing:
licensing@imagiqa.health

---

© 2026 imagiQa Healthcare Services Pvt Ltd · LiPi™ and LiPicons™ are
trademarks of imagiQa Healthcare Services Pvt Ltd.

// scripts/build.mjs — generates dist/svg/{variant}/{name}.svg + dist/json/icons.json
// v1.0.1: robust attribute handling for paths with baked-in fill="..." (e.g. dots)
import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";

const SOURCES = [
  "lipi-icons-data.js",
  "lipi-icons-phase4.js","lipi-icons-phase4b.js","lipi-icons-phase4c.js",
  "lipi-icons-phase4d.js","lipi-icons-phase4e.js","lipi-icons-phase4f.js",
  "lipi-icons-phase4g.js","lipi-icons-phase4h.js","lipi-icons-phase4i.js",
];

const VARIANTS = {
  regular: { stroke: 1.75 },
  bold:    { stroke: 2.25 },
  light:   { stroke: 1.25 },
  thin:    { stroke: 1.00 },
  fill:    { stroke: 0,    mode: "fill" },
  duotone: { stroke: 1.5,  mode: "duotone" },
};

// Strip existing fill/stroke/fill-opacity before adding the variant's attrs.
// Required because ~519 icons have decorative dots with baked-in fill="currentColor",
// and naive concatenation would produce duplicate XML attributes (parse error).
function applyAttrs(svgFrag, newAttrs) {
  return svgFrag.replace(
    /<(path|circle|rect|ellipse|polygon|polyline|line)\b([^/>]*)(\/?>)/g,
    (m, tag, attrs, end) => {
      const cleaned = attrs
        .replace(/\s*fill\s*=\s*"[^"]*"/g, "")
        .replace(/\s*stroke\s*=\s*"[^"]*"/g, "")
        .replace(/\s*fill-opacity\s*=\s*"[^"]*"/g, "");
      return `<${tag} ${newAttrs}${cleaned}${end}`;
    }
  );
}

const ctx = vm.createContext({ window: {} });
for (const f of SOURCES) {
  const src = await fs.readFile(path.join("src", f), "utf8");
  vm.runInContext(src, ctx, { filename: f });
}
const ICONS = ctx.window.LIPI_ICONS;
const names = Object.keys(ICONS);
console.log(`Loaded ${names.length} icons`);

function renderSvg(def, variant) {
  const v = VARIANTS[variant];
  const paths = def.paths.join("");
  const base = `width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"`;

  if (v.mode === "fill") {
    return `<svg ${base}>${applyAttrs(paths, 'fill="currentColor" stroke="none" ')}</svg>`;
  }
  if (v.mode === "duotone") {
    const idx = def.paths.findIndex(p => /<(rect|circle|ellipse)/.test(p) || /[Zz]/.test(p));
    const i = idx === -1 ? 0 : idx;
    const bg = applyAttrs(def.paths[i], 'fill="currentColor" stroke="none" fill-opacity="0.22" ');
    return `<svg ${base} stroke-width="${v.stroke}">${bg}${paths}</svg>`;
  }
  return `<svg ${base} stroke-width="${v.stroke}">${paths}</svg>`;
}

let count = 0;
for (const [name, def] of Object.entries(ICONS)) {
  for (const variant of Object.keys(VARIANTS)) {
    const dir = path.join("dist", "svg", variant);
    await fs.mkdir(dir, { recursive: true });
    const svg = renderSvg(def, variant);
    const header = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- LiPicons · ${name} · ${variant} · © 2026 imagiQa -->\n`;
    await fs.writeFile(path.join(dir, `${name}.svg`), header + svg);
    count++;
  }
}

await fs.mkdir("dist/json", { recursive: true });
await fs.writeFile(
  "dist/json/icons.json",
  JSON.stringify({
    version: "1.0.1",
    count: names.length,
    variants: Object.keys(VARIANTS),
    icons: ICONS,
  }, null, 2),
);

console.log(`✓ wrote ${count} SVG files + manifest`);

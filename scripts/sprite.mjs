// scripts/sprite.mjs — builds dist/lipicons.svg + dist/lipicons.{variant}.svg
// v1.0.1: robust attribute handling matches build.mjs
import fs from "node:fs/promises";

const manifest = JSON.parse(await fs.readFile("dist/json/icons.json", "utf8"));

const VARIANTS = {
  regular: { stroke: 1.75 },
  bold:    { stroke: 2.25 },
  light:   { stroke: 1.25 },
  thin:    { stroke: 1.00 },
  fill:    { stroke: 0,    mode: "fill" },
  duotone: { stroke: 1.5,  mode: "duotone" },
};

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

for (const variant of Object.keys(VARIANTS)) {
  const symbols = [];
  for (const [name, def] of Object.entries(manifest.icons)) {
    const v = VARIANTS[variant];
    const paths = def.paths.join("");
    let inner;
    if (v.mode === "fill") {
      inner = applyAttrs(paths, 'fill="currentColor" stroke="none" ');
    } else if (v.mode === "duotone") {
      const idx = def.paths.findIndex(p => /<(rect|circle|ellipse)/.test(p) || /[Zz]/.test(p));
      const i = idx === -1 ? 0 : idx;
      const bg = applyAttrs(def.paths[i], 'fill="currentColor" stroke="none" fill-opacity="0.22" ');
      inner = bg + paths;
    } else {
      inner = paths;
    }
    const swAttr = v.stroke ? ` stroke-width="${v.stroke}"` : "";
    symbols.push(`<symbol id="${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${swAttr}>${inner}</symbol>`);
  }
  const sprite = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols.join("\n")}\n</svg>\n`;
  const file = variant === "regular" ? "dist/lipicons.svg" : `dist/lipicons.${variant}.svg`;
  await fs.writeFile(file, sprite);
  console.log(`✓ ${file} · ${symbols.length} symbols`);
}

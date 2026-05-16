// scripts/sprite.mjs — builds dist/lipicons.svg + dist/lipicons.{variant}.svg
import fs from "node:fs/promises";

const manifest = JSON.parse(await fs.readFile("dist/json/icons.json", "utf8"));

for (const variant of manifest.variants) {
  const symbols = [];
  for (const name of Object.keys(manifest.icons)) {
    const svgText = await fs.readFile(`dist/svg/${variant}/${name}.svg`, "utf8");
    const match = svgText.match(/<svg([^>]*)>([\s\S]*?)<\/svg>/);
    if (!match) continue;
    const attrs = match[1].replace(/\s*(width|height)="[^"]*"/g, "");
    symbols.push(`<symbol id="${name}"${attrs}>${match[2]}</symbol>`);
  }
  const sprite = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols.join("\n")}\n</svg>`;
  const file = variant === "regular" ? "dist/lipicons.svg" : `dist/lipicons.${variant}.svg`;
  await fs.writeFile(file, sprite);
  console.log(`✓ ${file} · ${symbols.length} symbols`);
}

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

// Optional source folder for reproducing optimized assets from the original generation outputs.
const source = process.argv[2];
if (!source) throw new Error("Usage: node scripts/prepare-assets.mjs <generation-output-directory>");
await mkdir("public/images", { recursive: true });
const assets = [
  ["exec-351be5a4-a1d3-48fb-9f9b-1f27bac9281e.png", "kiosk-hero.webp", 1122],
  ["exec-b0f6ae5b-32c5-446a-995a-f70e86efe57e.png", "restaurant.webp", 1200],
  ["exec-9ca064e6-84fd-46c1-b02c-6c41ffeecee1.png", "burger.webp", 500],
];
for (const [file, output, width] of assets) {
  await sharp(path.join(source, file)).resize({ width, withoutEnlargement: true }).webp({ quality: 84 }).toFile(path.join("public/images", output));
}
await sharp(path.join(source, "exec-177f4438-7539-40b8-bd5c-86c105756b37.png"))
  .trim({ threshold: 35 }).resize({ width: 760 }).webp({ quality: 92 }).toFile("public/images/logo-dark.webp");

// Preserve the supplied isotipo; a light background keeps the original black mark legible.
for (const [size, file] of [[64, "icon.png"], [180, "apple-icon.png"]]) {
  const mark = await sharp("public/isotipo.png").trim().resize(size - 12, size - 12, { fit: "inside" }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: "#f5f4f0" } })
    .composite([{ input: mark, gravity: "center" }]).png().toFile(`public/${file}`);
}

const logo = await sharp("public/images/logo-dark.webp").resize({ width: 330 }).toBuffer();
const kiosk = await sharp("public/images/kiosk-hero.webp").resize({ height: 630 }).toBuffer();
const typography = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect x="58" y="169" width="7" height="7" fill="#ff680a"/><text x="79" y="177" font-family="Arial" font-size="12" fill="#aaa99f" letter-spacing="2">AUTOSERVICIO PARA TU NEGOCIO</text><text x="55" y="263" font-family="Arial" font-size="62" font-weight="bold" fill="#f5f4f0">TU PRÓXIMO</text><text x="55" y="337" font-family="Arial" font-size="62" font-weight="bold" fill="#f5f4f0">PUNTO DE VENTA</text><text x="55" y="416" font-family="Arial" font-size="70" font-weight="bold" fill="#ff680a">ES TOUCH.</text><text x="59" y="487" font-family="Arial" font-size="17" fill="#bab9b0">Hardware + software + instalación + soporte</text><rect x="58" y="527" width="224" height="43" rx="4" fill="#ff680a"/><text x="79" y="554" font-family="Arial" font-size="14" font-weight="bold" fill="#17130e">TU PROPUESTA A MEDIDA ↗</text></svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#111111" } })
  .composite([{ input: kiosk, top: 0, left: 696 }, { input: logo, top: 55, left: 58 }, { input: typography }])
  .jpeg({ quality: 90 }).toFile("public/images/og-image.jpg");
console.log("Optimized images, brand assets, icons and social image generated.");

import fs from "fs";
import path from "path";

const iconDir = "./public/icons";
const spritePath = "./public/sprite.svg";

let sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n`;

for (const file of fs.readdirSync(iconDir)) {
  if (!file.endsWith(".svg")) continue;
  const id = file.replace(".svg", "");
  const content = fs
    .readFileSync(path.join(iconDir, file), "utf-8")
    .replace(/<\?xml.*?\?>/g, "")
    .replace(/<!DOCTYPE.*?>/g, "")
    .replace(/<svg[^>]*>|<\/svg>/g, "");
  sprite += `<symbol id="${id}" viewBox="0 0 32 32">${content}</symbol>\n`;
}

sprite += `</svg>`;
fs.writeFileSync(spritePath, sprite);
console.log(`✅ Sprite built: ${spritePath}`);

// Builds index.html from template.html + data.js with the content pre-rendered,
// so search engines and link previews can read it without running JavaScript.
// Usage (from repo root): node tools/prerender.cjs   (needs: npm i jsdom)
const fs = require("fs");
const path = require("path");
const { JSDOM } = require(process.env.JSDOM_PATH || "jsdom");
const root = path.resolve(__dirname, "..");
const tpl = fs.readFileSync(path.join(root, "template.html"), "utf8");
const data = fs.readFileSync(path.join(root, "data.js"), "utf8");
const TAG = '<script src="data.js"></script>';
if (!tpl.includes(TAG)) throw new Error("template.html must contain " + TAG);
const marked = tpl.replace(TAG, "<script data-inline-data>\n" + data.replace(/<\/script/gi, "<\\/script") + "\n</script>");
const dom = new JSDOM(marked, { runScripts: "dangerously", url: "https://renehyewonlee.com/", pretendToBeVisual: true });
let out = dom.serialize();
out = out.replace(/<script data-inline-data="">[\s\S]*?<\/script>/, TAG);
if (!out.includes('id="works-list"><li')) throw new Error("render produced no works");
fs.writeFileSync(path.join(root, "index.html"), out);
console.log("index.html written,", out.length, "bytes");

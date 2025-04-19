// build/build.js

const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
const CleanCSS = require("clean-css");

// ========================== CONFIG ==========================
const config = {
  inputDir: path.join(__dirname, "../core"),
  outputDir: path.join(__dirname, "../dist"),
  outputFile: "anix.css",
  outputMinFile: "anix.min.css",
  meta: {
    name: "AniX Animation Library",
    version: "1.0.0",
    author: "Siddharth",
    description: "A fast, open animation library built for developers.",
    license: "MIT", // Optional
  },
};

// ========================== UTILS ===========================
function createBanner() {
  const { name, version, author, description, license } = config.meta;
  return `/*!
 * ${name} v${version}
 * ${description}
 * Author: ${author}
 * License: ${license}
 */\n\n`;
}

function ensureOutputDir() {
  if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir);
    console.log("✅ /dist directory created");
  }
}

function collectCSSFiles() {
  const files = fs
    .readdirSync(config.inputDir)
    .filter((f) => f.endsWith(".css"))
    .map((f) => path.join(config.inputDir, f));
  return files;
}

function buildCSS() {
  const files = collectCSSFiles();
  let finalCSS = createBanner();

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    finalCSS += `/* ${path.basename(file)} */\n` + content + "\n\n";
  });

  const outputPath = path.join(config.outputDir, config.outputFile);
  fs.writeFileSync(outputPath, finalCSS, "utf8");
  console.log(`✅ Built ${config.outputFile} with ${files.length} file(s)`);

  // Minify
  const minified = new CleanCSS().minify(finalCSS);
  const minPath = path.join(config.outputDir, config.outputMinFile);
  fs.writeFileSync(minPath, minified.styles, "utf8");
  console.log(`✅ Minified CSS saved as ${config.outputMinFile}`);
}

function watchCSS() {
  console.log("👀 Watching for changes...");
  chokidar.watch(config.inputDir).on("change", () => {
    console.clear();
    console.log("🔄 Change detected, rebuilding...");
    buildCSS();
  });
}

// ======================== CLI Runner ========================
const args = process.argv.slice(2);

ensureOutputDir();
buildCSS();

if (args.includes("--watch")) {
  watchCSS();
}

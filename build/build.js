const fs = require("fs");
const path = require("path");
const CleanCSS = require("clean-css");

const coreDir = path.join(__dirname, "../core");
const distDir = path.join(__dirname, "../dist");
const distFile = path.join(distDir, "anix.css");
const distMinFile = path.join(distDir, "anix.min.css");

// Utility: Recursively read all CSS files inside core/
function getAllCssFiles(dir) {
  let cssFiles = [];

  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      cssFiles = cssFiles.concat(getAllCssFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith(".css")) {
      cssFiles.push(fullPath);
    }
  }

  return cssFiles;
}

// Read and combine all CSS from core/
const cssFiles = getAllCssFiles(coreDir);
const combinedCoreCSS = cssFiles.map(file => fs.readFileSync(file, "utf8")).join("\n\n");

// Ensure dist folder exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Write anix.css (unminified)
fs.writeFileSync(distFile, combinedCoreCSS, "utf8");

// Minify and write anix.min.css
const minified = new CleanCSS().minify(combinedCoreCSS);
fs.writeFileSync(distMinFile, minified.styles, "utf8");

console.log(`✅ Built anix.css and anix.min.css successfully with ${cssFiles.length} files from core/`);

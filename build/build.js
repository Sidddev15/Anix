const fs = require("fs");
const path = require("path");

const coreDir = path.join(__dirname, "../core");
const distFile = path.join(__dirname, "../dist/anix.css");

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

// Final output string
const output = `${combinedCoreCSS}`;
fs.writeFileSync(distFile, output);

console.log(`✅ Built anix.css successfully with ${cssFiles.length} files from core/`);

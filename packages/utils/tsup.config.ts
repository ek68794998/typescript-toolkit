import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "tsup";

const __filename = import.meta.url.replace(/^file:/g, "");
const __dirname = path.dirname(__filename);
const packageJsonPath = path.join(__dirname, "package.json");

console.log(`Reading exports from package.json (${packageJsonPath})...`);

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const packageExports = packageJson.exports;
const packageExportKeys = Object.keys(packageExports);

console.log(`Found export keys: ${packageExportKeys.join(", ")}`);

const entry = {};
for (const key of packageExportKeys) {
	const keyString = String(key);
	const keyStripped = keyString.replace(/^\.\//g, "");
	entry[keyStripped] = `./src/${keyStripped}/index.ts`;
}

export default defineConfig({
	clean: true,
	dts: true,
	entry,
	format: ["cjs", "esm"],
	sourcemap: true,
	splitting: false,
});

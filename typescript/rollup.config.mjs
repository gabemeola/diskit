import fs from "fs";
import path from "path";
import typescript from "@rollup/plugin-typescript";
import { globbySync } from "globby";
import pkgJson from "./package.json" assert { type: "json" };

const outDir = "pkg";
const topLevelFiles = globbySync(["*.ts"]);
const apiFiles = globbySync([
  "api/*.ts",
  // "schema/*.ts"
]);

const files = [...topLevelFiles, ...apiFiles];
console.log(files);

function writePkgJson() {
  const exports = {
    "./package.json": "./package.json",
    "./api/*": {
      types: "./api/*.d.ts",
      require: "./api/*.cjs",
      import: "./api/*.mjs",
    },
    "./schema/*": {
      types: "./schema/*.d.ts",
    },
  };
  topLevelFiles.forEach((filePath) => {
    const exportPath = `./${filePath.replace(".ts", "")}`;
    let exportName = exportPath;
    if (filePath === "index.ts") {
      exportName = ".";
    }
    exports[exportName] = {
      types: `${exportPath}.d.ts`,
      require: `${exportPath}.cjs`,
      import: `${exportPath}.mjs`,
    };
  });
  pkgJson.exports = exports;
  fs.mkdirSync("pkg");
  fs.writeFileSync(
    path.join("pkg", "package.json"),
    JSON.stringify(pkgJson, null, 2)
  );
}

/**
 * Builds a rollup config for esm or cjs
 *
 * @type {(format: 'cjs' | 'esm') => import('rollup').RollupOptions}
 */
function buildConfig(format) {
  return {
    input: files,
    output: {
      dir: outDir,
      format,
      preserveModules: true,
      exports: "named",
      entryFileNames(chunk) {
        const ext = format == "cjs" ? "cjs" : "mjs";
        // Flatten src dir so output is `output/index.js`
        // instead of `ouput/src/index.js`.
        // if (chunk.facadeModuleId.startsWith(srcDir)) {
        //   const name = chunk.name.replace(/^src\//, '');
        //   return `${name}.${ext}`;
        // }
        // // Since node modules are bundled, renamed the output
        // // directory so it doesn't clash with node_modules semantics.
        // if (chunk.facadeModuleId.includes('node_modules/')) {
        //   const name = chunk.name
        //     .replaceAll('node_modules/', 'lib/')
        //     // Also remove the .pnpm prefix if present
        //     .replace('.pnpm/', '');
        //   return `${name}.${ext}`;
        // }

        return `[name].${ext}`;
      },
    },
    plugins: [
      typescript({
        declaration: true,
        outDir: outDir,
      }),
    ],
    onwarn(warning, warn) {
      // Throw an error on unresolved dependencies (not listed in package json)
      if (warning.code === "UNRESOLVED_IMPORT")
        throw new Error(`${warning.message}.
Make sure this dependency is listed in the package.json or external.
    `);

      // Use default for everything else
      warn(warning);
    },
  };
}

// Clean
fs.rmdirSync("pkg", { recursive: true, force: true });
// Generate pkg json
writePkgJson();
export default [buildConfig("cjs"), buildConfig("esm")];

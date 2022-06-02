const esbuild = require("esbuild");
const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");

esbuild
  .build({
    entryPoints: ["./index.ts"],
    minify: process.env.NODE_ENV === "production",
    bundle: true,
    outfile: "./bundle.js",
    plugins: [pnpPlugin()],
    watch: true,
  })
  .catch(() => process.exit(1));

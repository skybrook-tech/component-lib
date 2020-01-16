const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");
const replace = require("rollup-plugin-replace");

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile = NODE_ENV === "production" ? "./lib/prod.js" : "./lib/dev.js";

export default {
  output: {
    file: outputFile
  },
  input: "src/lib.js",
  format: "cjs",
  external: ["react", "react-dom", "@emotion/core", "emotion-theming"],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    babel()
  ]
};

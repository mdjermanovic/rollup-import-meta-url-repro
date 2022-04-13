export default [
  {
      input: "./index.js",
      external: ["module"],
      treeshake: false,
      output: {
          format: "cjs",
          file: "my%2Fdir/index.cjs",
      }
  }
];
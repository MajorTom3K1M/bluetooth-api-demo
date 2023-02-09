export default {
    build: {
      rollupOptions: {
        plugins: [
          require("@rollup/plugin-babel")({
            babelHelpers: "bundled",
            presets: [["@babel/preset-react"]],
          }),
        ],
      },
    },
  };
  
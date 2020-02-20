module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["./src/"],
          alias: {
            components: "./src/components",
            store: "./src/store",
            style: "./src/style"
          }
        }
      ]
    ]
  };
};

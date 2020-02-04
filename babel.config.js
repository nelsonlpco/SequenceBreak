module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: './',
        alias: {
          components: './src/components/',
          pages: './src/pages/',
          store: './src/store/',
          style: './src/style',
        },
      },
    ],
  ],
};

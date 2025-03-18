module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'components': "./src/components",
          'hooks': "./src/hooks",
          'icons': "./src/icons",
        },
      },
    ],
  ],
};
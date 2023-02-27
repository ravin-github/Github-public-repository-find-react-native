module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@navigation': ['./src/navigation'],
          '@components': ['./src/components'],
          '@themes': ['./src/themes'],
          '@services': ['./src/services'],
          '@images': ['./src/assets/images'],
          '@svg': ['./src/assets/svg'],
          '@config': ['./src/config'],
          '@utils': ['./src/utils'],
          '@store': ['./src/store'],
          '@screens': ['./src/screens'],
          '@assets': ['./src/assets'],
          '@mock': ['./src/mock'],
        },
      },
    ],
  ],
};

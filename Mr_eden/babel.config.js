module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        "envName": "SB_ENV",
        "moduleName": "@env",
        "path": ".env",
        "blocklist": null,
        "allowlist": null,
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true,
      },
      'react-native-dotenv-eden'
    ]
  ]
};
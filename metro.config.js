const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.resolverMainFields.unshift("sbmodern");

module.exports = defaultConfig;

// defaultConfig.resolver.resolverMainFields = [
//   "sbmodern",
//   ...defaultConfig.resolver.resolverMainFields,
// ];

// metro.config.js

const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;
const path = require("path");
defaultConfig.resolver.resolverMainFields.unshift("sbmodern");

defaultConfig.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);
defaultConfig.resolver.assetExts = assetExts.filter((ext) => ext !== "svg");
defaultConfig.resolver.sourceExts = [...sourceExts, "svg"];

defaultConfig.resolver.extraNodeModules = {
  src: path.resolve(__dirname, "src"),
};

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

module.exports = defaultConfig;

// defaultConfig.resolver.resolverMainFields = [
//   "sbmodern",
//   ...defaultConfig.resolver.resolverMainFields,
// ];

// metro.config.js

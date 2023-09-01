module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.?(ts|tsx|js|jsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
  ],
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../assets"],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    // absolute route ('src/')
    config.resolve ??= {};
    config.resolve.alias ??= {};
    config.resolve.alias["src"] = path.resolve(__dirname, "../../src");

    // set up svgr
    const imageRule = config.module?.rules?.find((rule) => {
      const test = rule.test;

      if (!test) {
        return false;
      }

      return test.test(".svg");
    });

    imageRule.exclude = /\.svg$/;

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

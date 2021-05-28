const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    console.log("CONFIG", config.resolve.alias);

    config.resolve.alias = {
      ...config.resolve.alias,
      "@emotion/core": "@emotion/react",
      "emotion-theming": "@emotion/react",
    };

    return config;
  },
};

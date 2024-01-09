import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen",
  },
  async viteFinal(config, { configType }) {
    if (configType === "DEVELOPMENT") {
      //TODO: dev custom config
    }
    if (configType === "PRODUCTION") {
      //TODO: prod custom config
    }
    return mergeConfig(config, {
      resolve: (await import("../vite.config.js")).default.resolve,
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  },
};

export default config;

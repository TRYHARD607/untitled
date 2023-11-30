import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { type BuildPaths } from '../build/types/config';

const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-webpack5',
  },
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    // config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(buildCssLoaders(true));
    console.log(config.module.rules);
    return config;
  },
};

export default config;

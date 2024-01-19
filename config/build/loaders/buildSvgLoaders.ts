import { type RuleSetRule } from 'webpack';

export const buildSvgLoaders = (): RuleSetRule => ({
  test: /\.svg$/,
  use: ['@svgr/webpack'],
});

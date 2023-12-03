import { type RuleSetRule } from 'webpack';

export const buildSvgLoaders = (): RuleSetRule => {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
};

import { type RuleSetRule } from 'webpack';

import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildSvgLoaders } from './loaders/buildSvgLoaders';
import { type BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader: RuleSetRule = buildSvgLoaders();

  const cssLoader: RuleSetRule = buildCssLoaders(isDev);

  const babelLoader: RuleSetRule = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}

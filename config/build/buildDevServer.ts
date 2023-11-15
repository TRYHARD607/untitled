import { type Configuration as DevServerConfigurations } from 'webpack-dev-server';

import { type BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfigurations {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
}

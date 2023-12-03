import '../../src/app/styles/index.scss';

import type { Preview } from '@storybook/react';

import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';

const preview: Preview = {
  decorators: [RouteDecorator, ThemeDecorator(Theme.LIGHT)],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

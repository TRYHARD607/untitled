import '../../src/app/styles/index.scss';

import type { Preview } from '@storybook/react';

import { StylesDecorator } from '../../src/shared/config/decorators/StylesDecorator/StylesDecorator';

const preview: Preview = {
  decorators: [StylesDecorator],
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

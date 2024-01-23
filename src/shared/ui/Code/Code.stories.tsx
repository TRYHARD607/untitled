import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Code } from './Code';

const meta = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    text: "import type { Meta, StoryObj } from '@storybook/react';\nimport { Theme } from 'app/providers/ThemeProvider';\nimport { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';",
  },
};

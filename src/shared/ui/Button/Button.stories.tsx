import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ThemeButton } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
  },
};

export const OutlineDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

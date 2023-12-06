import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ButtonSize, ButtonTheme } from './Button';

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
    theme: ButtonTheme.CLEAR,
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
  },
};

export const OutlineSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
    size: ButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Background: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button',
  },
};

export const BackgroundDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Button',
  },
};

export const BackgroundInvertedDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Square: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareSizeL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '>',
    square: true,
    size: ButtonSize.XL,
  },
};

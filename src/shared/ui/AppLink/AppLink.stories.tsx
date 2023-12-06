import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: { to: '' },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'AppLink',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'AppLink',
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Inverted: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
    children: 'AppLink',
  },
};

export const InvertedDark: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
    children: 'AppLink',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Red: Story = {
  args: {
    theme: AppLinkTheme.RED,
    children: 'AppLink',
  },
};

export const RedDark: Story = {
  args: {
    theme: AppLinkTheme.RED,
    children: 'AppLink',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

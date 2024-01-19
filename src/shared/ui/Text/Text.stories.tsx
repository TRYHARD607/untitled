import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Text, TextAlign, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Text Text Text Text Text',
    title: 'Title Title Title',
  },
};

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
    text: 'Text Text Text Text Text',
    title: 'Title Title Title',
  },
};

export const PrimaryDark: Story = {
  args: {
    text: 'Text Text Text Text Text',
    title: 'Title Title Title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title Title Title',
  },
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title Title Title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyText: Story = {
  args: {
    text: 'Text Text Text Text Text',
  },
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Text Text Text Text Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextAlignRight: Story = {
  args: {
    text: 'Text Text Text Text Text',
    title: 'Title Title Title',
    align: TextAlign.RIGHT,
  },
};

export const TextALignCenter: Story = {
  args: {
    text: 'Text Text Text Text Text',
    title: 'Title Title Title',
    align: TextAlign.CENTER,
  },
};

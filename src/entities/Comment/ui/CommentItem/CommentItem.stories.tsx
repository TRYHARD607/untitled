import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { CommentItem } from './CommentItem';

const comment = {
  id: '1',
  text: 'text',
  user: { id: 'user1', username: 'user 1' },
};

const meta = {
  title: 'entities/CommentItem',
  component: CommentItem,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comment,
  },
};

export const Dark: Story = {
  args: {
    comment,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  args: {
    comment,
  },
  decorators: [ThemeDecorator(Theme.PURPLE)],
};

export const NormalLoading: Story = {
  args: {
    comment,
    isLoading: true,
  },
};

export const DarkLoading: Story = {
  args: {
    comment,
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const PurpleLoading: Story = {
  args: {
    comment,
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.PURPLE)],
};

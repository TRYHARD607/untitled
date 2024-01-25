import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { CommentList } from './CommentList';

const comments = [
  { id: '1', text: 'hello world!', user: { id: '1', username: 'user 1' } },
  { id: '2', text: 'hello world!', user: { id: '2', username: 'user 2' } },
  { id: '3', text: 'hello world!', user: { id: '3', username: 'user 3' } },
  { id: '4', text: 'hello world!', user: { id: '4', username: 'user 4' } },
];

const meta = {
  title: 'entities/comment/CommentList',
  component: CommentList,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comments,
  },
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  args: {
    comments,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  args: {
    comments,
  },
  decorators: [ThemeDecorator(Theme.PURPLE)],
};

export const Loading: Story = {
  args: {
    comments,
    isLoading: true,
  },
  decorators: [StoreDecorator({})],
};

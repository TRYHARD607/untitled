import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Text } from '../Text/Text';
import { Card } from './Card';

const meta = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <Text title='Some awesome title' text='Some awesome text' />,
  },
};

export const Dark: Story = {
  args: {
    children: <Text title='Some awesome title' text='Some awesome text' />,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Purple: Story = {
  args: {
    children: <Text title='Some awesome title' text='Some awesome text' />,
  },
  decorators: [ThemeDecorator(Theme.PURPLE)],
};

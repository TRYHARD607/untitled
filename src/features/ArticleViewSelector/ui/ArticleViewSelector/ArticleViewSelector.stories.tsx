import type { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from 'entities/Article';

import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
  title: 'features/ArticleViewSelector',
  component: ArticleViewSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListSelected: Story = {
  args: {
    view: ArticleView.LIST,
  },
};

export const PlateSelected: Story = {
  args: {
    view: ArticleView.PLATE,
  },
};

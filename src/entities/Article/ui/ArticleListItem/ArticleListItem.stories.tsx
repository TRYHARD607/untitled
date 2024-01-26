import type { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from 'entities/Article/model/types/article';

import { mockedArticle } from '../../model/mock/article';
import { ArticleListItem } from './ArticleListItem';

const meta = {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plate: Story = {
  args: {
    article: mockedArticle,
    view: ArticleView.PLATE,
  },
};

export const List: Story = {
  args: {
    article: mockedArticle,
    view: ArticleView.LIST,
  },
};

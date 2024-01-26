import type { Meta, StoryObj } from '@storybook/react';
import { mockedArticle } from 'entities/Article/model/mock/article';
import { ArticleView } from 'entities/Article/model/types/article';

import { ArticleList } from './ArticleList';

const meta = {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingList: Story = {
  args: {
    isLoading: true,
    view: ArticleView.LIST,
    articles: [],
  },
};

export const LoadingPlate: Story = {
  args: {
    isLoading: true,
    view: ArticleView.PLATE,
    articles: [],
  },
};

export const List: Story = {
  args: {
    articles: new Array(16)
      .fill(0)
      .map((_, index) => ({ ...mockedArticle, id: `${index}` })),
    view: ArticleView.LIST,
  },
};

export const Plate: Story = {
  args: {
    articles: new Array(16)
      .fill(0)
      .map((_, index) => ({ ...mockedArticle, id: `${index}` })),
    view: ArticleView.PLATE,
  },
};

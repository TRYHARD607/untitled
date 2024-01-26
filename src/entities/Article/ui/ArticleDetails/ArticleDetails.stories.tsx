import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { mockedArticle } from 'entities/Article/model/mock/article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ArticleDetails } from './ArticleDetails';

const meta = {
  title: 'entities/Article/ArticleDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { id: '1' },
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: mockedArticle,
      },
    }),
  ],
};

export const Loading: Story = {
  args: { id: '1' },
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
};

export const Error: Story = {
  args: { id: '1' },
  decorators: [
    StoreDecorator({
      articleDetails: {
        error: 'error',
      },
    }),
  ],
};

export const Dark: Story = {
  args: { id: '1' },
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      articleDetails: {
        data: mockedArticle,
      },
    }),
  ],
};

export const Purple: Story = {
  args: { id: '1' },
  decorators: [
    ThemeDecorator(Theme.PURPLE),
    StoreDecorator({
      articleDetails: {
        data: mockedArticle,
      },
    }),
  ],
};

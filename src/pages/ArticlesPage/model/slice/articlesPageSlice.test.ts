import { type Article, ArticleView, mockedArticle } from 'entities/Article';

import { fetchArticles } from '../services/fetchArticles/fetchArticles';
import { type ArticlesPageSchema } from '../types/articlesPageSchema';
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';

const data: Article[] = [mockedArticle];

describe('profileSlice.test', () => {
  test('set view', () => {
    const state: DeepPartial<ArticlesPageSchema> = { view: ArticleView.PLATE };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setView(ArticleView.LIST)
      )
    ).toEqual({
      view: ArticleView.LIST,
    });
  });
  test('test fetch article service pending', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: false,
      error: 'error',
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticles.pending('')
      )
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('test fetch article service fulfilled', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: true,
      error: 'error',
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticles.fulfilled(data, '')
      )
    ).toEqual({
      isLoading: false,
      error: undefined,
      ids: ['1'],
      entities: {
        1: data[0],
      },
    });
  });

  test('test fetch article service rejected', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: true,
      error: undefined,
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticles.rejected(null, 'error', undefined, 'error')
      )
    ).toEqual({
      isLoading: false,
      error: 'error',
    });
  });
});

import { type Article, ArticleView, mockedArticle } from 'entities/Article';

import { fetchArticles } from '../services/fetchArticles/fetchArticles';
import { type ArticlesPageSchema } from '../types/articlesPageSchema';
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice';

const data: Article[] = [mockedArticle, { ...mockedArticle, id: '2' }];

describe('articlesPageSlice.test', () => {
  test('init state', () => {
    const state: DeepPartial<ArticlesPageSchema> = {};
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.initState()
      )
    ).toEqual({
      view: ArticleView.PLATE,
      limit: 9,
    });
  });

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

  test('set page', () => {
    const state: DeepPartial<ArticlesPageSchema> = { page: 2 };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setPage(30)
      )
    ).toEqual({
      page: 30,
    });
  });

  test('set hasMore', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      hasMore: true,
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        articlesPageActions.setHasMore(false)
      )
    ).toEqual({
      hasMore: false,
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
        fetchArticles.pending('', { page: 1 })
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
      ids: [],
      entities: {},
    };
    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticles.fulfilled(data, '1', { page: 1 })
      )
    ).toEqual({
      isLoading: false,
      error: undefined,
      ids: ['1', '2'],
      entities: {
        1: data[0],
        2: data[1],
      },
      hasMore: true,
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
        fetchArticles.rejected(null, 'error', { page: 1 }, 'error')
      )
    ).toEqual({
      isLoading: false,
      error: 'error',
    });
  });
});

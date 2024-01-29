import { type StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageView,
} from './articlesPageSelectors';

describe('article comments selectors.test', () => {
  test('getArticlesPageError should return value', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: 'error',
      },
    };
    expect(getArticlesPageError(state as StateSchema)).toEqual('error');
  });

  test('getArticlesPageError should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
  });

  test('getArticlesPageIsLoading should return value', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true,
      },
    };
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
  });

  test('getArticlesPageIsLoading should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(undefined);
  });

  test('getArticlesPageView should return value', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        view: ArticleView.PLATE,
      },
    };
    expect(getArticlesPageView(state as StateSchema)).toEqual(
      ArticleView.PLATE
    );
  });

  test('getArticlesPageView should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageView(state as StateSchema)).toEqual(undefined);
  });

  test('getArticlesPageLimit should return value', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        limit: 15,
      },
    };
    expect(getArticlesPageLimit(state as StateSchema)).toEqual(15);
  });

  test('getArticlesPageLimit should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageLimit(state as StateSchema)).toEqual(undefined);
  });

  test('getArticlesPageNum should return value', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 2,
      },
    };
    expect(getArticlesPageNum(state as StateSchema)).toEqual(2);
  });

  test('getArticlesPageNum should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageNum(state as StateSchema)).toEqual(1);
  });
  test('getArticlesPageHasMore should return value', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        hasMore: false,
      },
    };
    expect(getArticlesPageHasMore(state as StateSchema)).toEqual(false);
  });

  test('getArticlesPageHasMore should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageHasMore(state as StateSchema)).toEqual(undefined);
  });
});

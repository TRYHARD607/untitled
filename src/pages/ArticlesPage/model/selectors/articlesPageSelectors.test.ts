import { type StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
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
});

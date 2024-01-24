import { type StateSchema } from 'app/providers/StoreProvider';

import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from './comments';

describe('article comments selectors.test', () => {
  test('getArticleCommentsError should return value', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: 'error',
      },
    };
    expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
  });

  test('getArticleCommentsError should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
  });

  test('getArticleCommentsIsLoading should return value', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('getArticleCommentsIsLoading should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(
      undefined
    );
  });
});

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticles } from '../fetchArticles/fetchArticles';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticlesPage.test', () => {
  test(' fetchNextArticlesPage success fetch', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalledWith({ page: 3 });
  });

  test('fetchNextArticlesPage cant be called cause hasMore', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalledWith({ page: 3 });
  });

  test('fetchNextArticlesPage cant be called cause isLoading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalledWith({ page: 3 });
  });
});

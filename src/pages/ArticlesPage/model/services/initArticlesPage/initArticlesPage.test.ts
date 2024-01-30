import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticles } from '../fetchArticles/fetchArticles';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticles/fetchArticles');

describe('initArticlesPage.test', () => {
  test('initArticlesPage success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalledWith({ page: 1 });
  });

  test('initArticlesPage cant be called cause already inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    });

    await thunk.callThunk();
    expect(thunk.getState).toHaveBeenCalledTimes(1);
    expect(fetchArticles).not.toHaveBeenCalledWith({ page: 1 });
  });
});

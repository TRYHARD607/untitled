import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';

import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageLimit,
  getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const fetchNextArticlesPage = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (args, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi;
  const isLoading = getArticlesPageIsLoading(getState());
  const page = getArticlesPageNum(getState());
  const hasMore = getArticlesPageHasMore(getState());
  const limit = getArticlesPageLimit(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));
    void dispatch(fetchArticles({ page: page + 1 }));
  }

  try {
    const response = await extra.api.get<Article[]>('articles', {
      params: { _expand: 'user', _limit: limit, _page: page },
    });
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue('error');
  }
});

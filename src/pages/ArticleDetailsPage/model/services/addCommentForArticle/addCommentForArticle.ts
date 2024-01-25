import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { type Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi;
  const userData = getUserAuthData(getState());
  const article = getArticleDetailsData(getState());

  if (!userData || !text || !article) {
    return rejectWithValue('no data');
  }

  try {
    const response = await extra.api.post<Comment>('/comments', {
      articleId: article?.id,
      userId: userData.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }

    void dispatch(fetchCommentsByArticleId(article.id));

    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue('error');
  }
});

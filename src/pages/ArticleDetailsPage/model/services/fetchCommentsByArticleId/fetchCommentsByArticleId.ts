import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  'articleDetailsComments/fetchCommentsByArticleId',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      if (!articleId) {
        throw new Error();
      }
      const response = await extra.api.get<Comment[]>('comments', {
        params: { articleId, _expand: 'user' },
      });
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue('error');
    }
  }
);
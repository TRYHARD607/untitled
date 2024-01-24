import { type Comment } from 'entities/Comment';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

const data: Comment[] = [
  { id: '1', text: 'text', user: { id: 'user1', username: 'user 1' } },
  { id: '2', text: 'text2', user: { id: 'user2', username: 'user 2' } },
];

describe('profileSlice.test', () => {
  test('test fetch article service pending', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: 'error',
    };
    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.pending('', '')
      )
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('test fetch article service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
      error: 'error',
    };
    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.fulfilled(data, '', '')
      )
    ).toEqual({
      isLoading: false,
      error: undefined,
      ids: ['1', '2'],
      entities: {
        1: data[0],
        2: data[1],
      },
    });
  });

  test('test fetch article service rejected', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
      error: undefined,
    };
    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.rejected(null, '', 'error', 'error')
      )
    ).toEqual({
      isLoading: false,
      error: 'error',
    });
  });
});

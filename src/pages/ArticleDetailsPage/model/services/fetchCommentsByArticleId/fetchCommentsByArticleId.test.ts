import { type Comment } from 'entities/Comment';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const data: Comment[] = [
  { id: '1', text: 'text', user: { id: 'user1', username: 'user 1' } },
  { id: '2', text: 'text2', user: { id: 'user2', username: 'user 2' } },
];

describe('fetchCommentsByArticleId.test', () => {
  test('success fetch', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});

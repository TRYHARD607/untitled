import { type Comment } from 'entities/Comment';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { addCommentForArticle } from './addCommentForArticle';

const data: Comment = {
  id: '1',
  text: 'text',
  user: { id: 'user1', username: 'user 1' },
};

describe('addCommentForArticle.test', () => {
  test('success post', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: { authData: { username: 'user1', id: 'user1' } },
      articleDetails: { data: { id: '1' } },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('text');
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: { authData: { username: 'user1', id: 'user1' } },
      articleDetails: { data: { id: '1' } },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });

  test('no auth data error', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      articleDetails: { data: { id: '1' } },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('no data');
  });
});

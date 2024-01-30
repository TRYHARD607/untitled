import { type StateSchema } from 'app/providers/StoreProvider';

import {
  getAddNewCommentError,
  getAddNewCommentIsLoading,
  getAddNewCommentText,
} from './addNewCommentSelectors';

describe('article comments selectors.test', () => {
  test('getAddNewCommentError should return value', () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        error: 'error',
      },
    };
    expect(getAddNewCommentError(state as StateSchema)).toEqual('error');
  });

  test('getAddNewCommentError should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddNewCommentError(state as StateSchema)).toEqual(undefined);
  });

  test('getAddNewCommentText should return value', () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        text: 'text 12312',
      },
    };
    expect(getAddNewCommentText(state as StateSchema)).toEqual('text 12312');
  });

  test('getAddNewCommentText should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddNewCommentText(state as StateSchema)).toEqual('');
  });

  test('getAddNewCommentIsLoading should return value', () => {
    const state: DeepPartial<StateSchema> = {
      addNewComment: {
        isLoading: true,
      },
    };
    expect(getAddNewCommentIsLoading(state as StateSchema)).toEqual(true);
  });

  test('getAddNewCommentIsLoading should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddNewCommentIsLoading(state as StateSchema)).toEqual(undefined);
  });
});

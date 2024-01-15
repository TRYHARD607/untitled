import { type StateSchema } from 'app/providers/StoreProvider';

import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
        password: 'password',
        error: 'error',
        isLoading: true,
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'username',
      password: 'password',
      error: 'error',
      isLoading: true,
    });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});

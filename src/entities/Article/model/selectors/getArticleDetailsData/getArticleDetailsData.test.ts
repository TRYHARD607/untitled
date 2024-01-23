import { type StateSchema } from 'app/providers/StoreProvider';

import { getArticleDetailsData } from './getArticleDetailsData';

describe('getArticleDetailsData.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: {
          id: '1',
          title: 'some title',
        },
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual({
      id: '1',
      title: 'some title',
    });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});

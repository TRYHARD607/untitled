import { type StateSchema } from 'app/providers/StoreProvider';

import { ValidateProfileError } from '../../types/profileSchema';
import { getProfileValidationErrors } from './getProfileValidationErrors';

describe('getProfileValidationError.test', () => {
  test('should return value', () => {
    const errors = [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.NO_DATA,
    ];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    };
    expect(getProfileValidationErrors(state as StateSchema)).toEqual(errors);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
  });
});

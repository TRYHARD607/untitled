import { type StateSchema } from 'app/providers/StoreProvider';
import { Country, Currency } from 'shared/consts/common';

import { type Profile } from '../../types/profile';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return error', () => {
    const mockedData: Profile = {
      first: 'Alex',
      lastname: 'Kvashnev',
      age: 26,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Novosibirsk',
      username: 'admin',
      avatar: 'avatar',
    };
    const state: DeepPartial<StateSchema> = { profile: { data: mockedData } };
    expect(getProfileData(state as StateSchema)).toEqual(mockedData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});

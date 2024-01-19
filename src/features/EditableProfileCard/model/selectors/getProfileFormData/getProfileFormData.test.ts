import { type StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { type Profile } from 'entities/Profile/model/types/profile';

import { getProfileFormData } from './getProfileFormData';

describe('getProfileFormData.test', () => {
  test('should return value', () => {
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
    const state: DeepPartial<StateSchema> = {
      profile: { formData: mockedData },
    };
    expect(getProfileFormData(state as StateSchema)).toEqual(mockedData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
  });
});

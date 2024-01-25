import { type StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { type Profile } from 'entities/Profile/model/types/profile';
import { type User } from 'entities/User';

import { getCanEdit } from './getCanEdit';

const mockedProfile: Profile = {
  first: 'Alex',
  lastname: 'Kvashnev',
  age: 26,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Novosibirsk',
  username: 'admin',
  avatar: 'avatar',
  id: '1',
};

const mockedAuthData: User = {
  username: 'admin',
  id: '1',
};

describe('getCanEdit.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { data: mockedProfile },
      user: { authData: mockedAuthData },
    };
    expect(getCanEdit(state as StateSchema)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { data: mockedProfile },
      user: { authData: { ...mockedAuthData, id: '2' } },
    };
    expect(getCanEdit(state as StateSchema)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getCanEdit(state as StateSchema)).toEqual(false);
  });
});

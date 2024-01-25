import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { ValidateProfileError } from '../../types/profileSchema';
import { updateProfileData } from './updateProfileData';

const data = {
  first: 'User',
  lastname: 'User',
  age: 21,
  country: Country.USA,
  currency: Currency.USD,
  city: 'City',
  avatar: '',
  username: 'admin',
  id: '1',
};

describe('updateProfileData.test', () => {
  test('success fetch', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { formData: data },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { formData: data },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { formData: { ...data, lastname: '' } },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { ValidateProfileError } from '../../types/profileSchema';
import { validateProfileData } from './validateProfileData';

const data = {
  first: 'User',
  lastname: 'User',
  age: 21,
  country: Country.USA,
  currency: Currency.USD,
  city: 'City',
  avatar: '',
  username: 'admin',
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: NaN });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('without country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('all errors', async () => {
    const result = validateProfileData({
      ...data,
      country: undefined,
      first: '',
      lastname: '',
      age: NaN,
    });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('no data', async () => {
    const result = validateProfileData();

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });
});

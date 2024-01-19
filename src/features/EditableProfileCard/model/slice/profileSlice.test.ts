import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import {
  type ProfileSchema,
  ValidateProfileError,
} from '../types/profileSchema';
import { profileActions, profileReducer } from './profileSlice';

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

describe('profileSlice.test', () => {
  test('set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({
      readonly: true,
    });
  });

  test('cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      formData: data,
      data,
      validateErrors: undefined,
    });
  });

  test('update profile', () => {
    const state: DeepPartial<ProfileSchema> = { formData: { first: 'aaa' } };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ first: 'bbbb' })
      )
    ).toEqual({
      formData: {
        first: 'bbbb',
      },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.pending('', undefined)
      )
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, '', undefined)
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      data,
      formData: data,
    });
  });

  test('test update profile service rejected', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: undefined,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.rejected(null, '', undefined, [
          ValidateProfileError.SERVER_ERROR,
        ])
      )
    ).toEqual({
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    });
  });
});

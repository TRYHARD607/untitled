import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Profile } from 'entities/Profile';

import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { ValidateProfileError } from '../../types/profileSchema';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const formData = getProfileFormData(getState());

  const errors = validateProfileData(formData);

  if (errors.length > 0) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>('profile', formData);
    if (!response.data) {
      console.log('here');
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});

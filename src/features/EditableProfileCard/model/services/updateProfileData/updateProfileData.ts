import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Profile } from 'entities/Profile';

import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';

export const updateProfileData = createAsyncThunk<
  Profile,
  undefined,
  ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const formData = getProfileFormData(getState());

  try {
    const response = await extra.api.put<Profile>('profile', formData);
    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue('error');
  }
});

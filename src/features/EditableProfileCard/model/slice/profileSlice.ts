import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Profile } from 'entities/Profile';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { type ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, { payload }: PayloadAction<boolean>) => {
      state.readonly = payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.formData = state.data;
    },
    updateProfile: (state, { payload }: PayloadAction<Profile>) => {
      state.formData = {
        ...state.formData,
        ...payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, { payload }: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = payload;
          state.formData = payload;
        }
      )
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, { payload }: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = payload;
          state.formData = payload;
          state.readonly = true;
        }
      )
      .addCase(updateProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;

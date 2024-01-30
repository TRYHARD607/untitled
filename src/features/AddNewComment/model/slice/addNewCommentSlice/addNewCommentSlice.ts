import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type AddNewCommentSchema } from '../../types/addNewComment';

const initialState: AddNewCommentSchema = {
  text: '',
  error: '',
  isLoading: false,
};

export const addNewCommentSlice = createSlice({
  name: 'addNewComment',
  initialState,
  reducers: {
    setText: (state, { payload }: PayloadAction<string>) => {
      state.text = payload;
    },
  },
});

export const { actions: addNewCommentActions, reducer: addNewCommentReducer } =
  addNewCommentSlice;

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
  extraReducers: (builder) => {
    // builder
    //   .addCase(sendComment.pending, (state) => {
    //     state.isLoading = true;
    //     state.error = undefined;
    //   })
    //   .addCase(sendComment.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.error = undefined;
    //     state.text = '';
    //   })
    //   .addCase(sendComment.rejected, (state, { payload }) => {
    //     state.isLoading = false;
    //     state.error = payload;
    //   });
  },
});

export const { actions: addNewCommentActions, reducer: addNewCommentReducer } =
  addNewCommentSlice;

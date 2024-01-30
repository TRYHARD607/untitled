import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type ScrollRestorationSchema } from '../types/ScrollRestorationSchema';

const initialState: ScrollRestorationSchema = {
  scroll: {},
};

export const scrollRestorationSlice = createSlice({
  name: 'scrollRestoration',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const {
  actions: scrollRestorationActions,
  reducer: scrollRestorationReducer,
} = scrollRestorationSlice;

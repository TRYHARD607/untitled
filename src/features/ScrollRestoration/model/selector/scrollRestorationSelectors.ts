import { createSelector } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';

export const getSavedScrolls = (state: StateSchema) =>
  state.scrollRestoration.scroll;

export const getSavedScrollByPath = createSelector(
  getSavedScrolls,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path]
);

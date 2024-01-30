import { type StateSchema } from 'app/providers/StoreProvider';

import {
  getSavedScrollByPath,
  getSavedScrolls,
} from './scrollRestorationSelectors';

describe('scroll restoration selectors.test', () => {
  test('getSavedScrolls should return value', () => {
    const state: DeepPartial<StateSchema> = {
      scrollRestoration: {
        scroll: { 'some/path': 500 },
      },
    };
    expect(getSavedScrolls(state as StateSchema)).toEqual({ 'some/path': 500 });
  });

  test('getSavedScrolls should work with empty scroll object', () => {
    const state: DeepPartial<StateSchema> = {
      scrollRestoration: {
        scroll: {},
      },
    };
    expect(getSavedScrolls(state as StateSchema)).toEqual({});
  });

  test('getSavedScrollByPath should return value', () => {
    const state: DeepPartial<StateSchema> = {
      scrollRestoration: {
        scroll: { 'some/path': 500 },
      },
    };
    expect(getSavedScrollByPath(state as StateSchema, 'some/path')).toEqual(
      500
    );
  });

  test('getSavedScrollByPath should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      scrollRestoration: {
        scroll: {},
      },
    };
    expect(getSavedScrollByPath(state as StateSchema, 'some/path')).toEqual(
      undefined
    );
  });
});

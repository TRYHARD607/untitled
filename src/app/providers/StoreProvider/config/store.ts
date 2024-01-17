import {
  configureStore,
  type ReducersMapObject,
  type UnknownAction,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { type NavigateOptions, type To } from 'react-router-dom';
import { $api } from 'shared/api/api';

import { createReducerManager } from './reducerManager';
import {
  type DefaultMiddlewareType,
  type StateSchema,
  type ThunkExtraArg,
} from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options: NavigateOptions) => void
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArgument: ThunkExtraArg = { api: $api, navigate };

  const store = configureStore<
    StateSchema,
    UnknownAction,
    DefaultMiddlewareType
  >({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument },
      }),
  });

  // @ts-expect-error no reducerManager in default store reducer
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

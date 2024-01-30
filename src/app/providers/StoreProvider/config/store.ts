import {
  configureStore,
  type ReducersMapObject,
  type UnknownAction,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';

import { createReducerManager } from './reducerManager';
import {
  type DefaultMiddlewareType,
  type StateSchema,
  type ThunkExtraArg,
} from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArgument: ThunkExtraArg = { api: $api };

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

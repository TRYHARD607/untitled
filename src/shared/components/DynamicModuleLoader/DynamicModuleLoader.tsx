import { type Reducer } from '@reduxjs/toolkit';
import {
  type ReduxStoreWithManager,
  type StateSchemaKey,
} from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { type ReactFCC } from 'shared/types/react';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: ReactFCC<DynamicModuleLoaderProps> = (
  props
) => {
  const { children, reducers, removeAfterUnmount = false } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();
    console.log(mountedReducers);
    Object.entries(reducers).forEach(([name, reducer]) => {
      if (!mountedReducers[name as StateSchemaKey]) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@REMOVE ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};

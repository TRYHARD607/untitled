import {
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject,
  type ThunkMiddleware,
  type Tuple,
  type UnknownAction,
} from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { type ArticleDetailsSchema } from 'entities/Article';
import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type AddNewCommentSchema } from 'features/AddNewComment';
import { type LoginSchema } from 'features/AuthByUsername';
import { type ProfileSchema } from 'features/EditableProfileCard';
import { type ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { type NavigateOptions, type To } from 'react-router-dom';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addNewComment?: AddNewCommentSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  // reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
  reduce: Reducer<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

export type DefaultMiddlewareType = Tuple<
  [ThunkMiddleware<StateSchema, UnknownAction, ThunkExtraArg>]
>;

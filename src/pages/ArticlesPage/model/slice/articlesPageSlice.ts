import {
  createEntityAdapter,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type Article, ArticleView } from 'entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

import { fetchArticles } from '../services/fetchArticles/fetchArticles';
import { type ArticlesPageSchema } from '../types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<Article, Article['id']>({
  selectId: (comment: Article) => comment.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.PLATE,
    page: 1,
    hasMore: true,
    ids: [],
    entities: {},
  }),
  reducers: {
    setView: (state, { payload }: PayloadAction<ArticleView>) => {
      state.view = payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, payload);
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setHasMore: (state, { payload }: PayloadAction<boolean>) => {
      state.hasMore = payload;
    },
    initState: (state) => {
      const view =
        (localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView) ||
        ArticleView.PLATE;
      console.log(view);
      state.view = view;
      state.limit = view === ArticleView.LIST ? 4 : 9;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = undefined;
        articlesAdapter.addMany(state, payload);
        state.hasMore = payload.length > 0;
      })
      .addCase(fetchArticles.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } =
  articlesPageSlice;

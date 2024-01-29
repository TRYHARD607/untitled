import { type EntityState } from '@reduxjs/toolkit';
import { type Article, type ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;

  view: ArticleView;
  page: number;
  limit?: number;
  hasMore: boolean;
}

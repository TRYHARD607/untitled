import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { type Article, ArticleBlockType, ArticleType } from '../types/article';
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

const data: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'wats news?',
  user: {
    id: '1',
    username: 'user',
    avatar:
      'https://play-lh.googleusercontent.com/-E6UbQ294TWPHa08XpxtsQDPm9HpoifE5IDjdLYKWxCFunA8DrpNt0rs0XtmRG5YTqM',
  },
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Title title',
      paragraphs: ['Text text text'],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
  ],
};

describe('profileSlice.test', () => {
  test('test fetch article service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: 'error',
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending('', '')
      )
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('test fetch article service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
      error: 'error',
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(data, '', '')
      )
    ).toEqual({
      isLoading: false,
      error: undefined,
      data,
    });
  });

  test('test fetch article service rejected', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
      error: undefined,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.rejected(null, '', 'error', 'error')
      )
    ).toEqual({
      isLoading: false,
      error: 'error',
    });
  });
});

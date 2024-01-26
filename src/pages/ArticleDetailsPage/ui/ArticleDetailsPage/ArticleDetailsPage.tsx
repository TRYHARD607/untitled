import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddNewCommentForm } from 'features/AddNewComment';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  type ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

const reducersList: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback(
    (val: string) => {
      void dispatch(addCommentForArticle(val));
    },
    [dispatch]
  );

  const onBackToListClick = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
        {t('Article not found')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
      <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
        <Button onClick={onBackToListClick}>{t('Back to list')}</Button>
        <ArticleDetails id={id} />
        <AddNewCommentForm onSendComment={onSendComment} />
        <Text title={t('Comments')} className={cls.commentTitle} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);

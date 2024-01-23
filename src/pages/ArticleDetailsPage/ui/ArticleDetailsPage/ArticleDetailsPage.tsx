import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation('article');

  if (!id) {
    return (
      <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
        {t('Article not found')}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);

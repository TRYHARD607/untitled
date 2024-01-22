import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticleDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
      {t('ARTICLE PAGE')}
    </div>
  );
};

export default memo(ArticleDetailsPage);

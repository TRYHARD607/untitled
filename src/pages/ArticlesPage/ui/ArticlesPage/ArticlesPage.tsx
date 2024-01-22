import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticlesPage.module.scss';

interface ArticlesDetailsPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesDetailsPageProps) => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
      {t('ARTICLES PAGE')}
    </div>
  );
};

export default memo(ArticlesPage);

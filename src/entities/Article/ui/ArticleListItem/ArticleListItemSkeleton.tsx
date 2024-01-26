import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  ({ className, view }: ArticleListItemSkeletonProps) => {
    if (view === ArticleView.LIST) {
      return (
        <div
          className={classNames(cls.ArticleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card className={cls.card}>
            <div className={cls.header}>
              <Skeleton width={30} height={30} border='50%' />
              <Skeleton width={150} height={16} className={cls.username} />
              <Skeleton width={100} height={16} className={cls.date} />
            </div>
            <Skeleton className={cls.title} width={250} height={24} />
            <Skeleton height={250} width='auto' className={cls.img} />
            <div className={cls.footer}>
              <Skeleton width={80} height={30} />
              <Skeleton width={100} height={16} className={cls.views} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.imageWrapper}>
            <Skeleton width={200} height={200} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width={130} height={16} />
            <Skeleton className={cls.views} width={40} height={16} />
          </div>
          <Skeleton className={cls.title} width={150} height={20} />
        </Card>
      </div>
    );
  }
);

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton';

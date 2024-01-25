import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import { type Comment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentItem isLoading />
        <CommentItem isLoading />
        <CommentItem isLoading />
        <CommentItem isLoading />
      </div>;
    }

    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        {comments?.length ? (
          comments.map((comment) => (
            <CommentItem
              className={cls.comment}
              comment={comment}
              key={comment.id}
              isLoading={isLoading}
            />
          ))
        ) : (
          <Text text={t('No comments')} />
        )}
      </div>
    );
  }
);

CommentList.displayName = 'CommentList';

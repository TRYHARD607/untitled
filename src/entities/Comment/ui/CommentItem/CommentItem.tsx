import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';

import { type Comment } from '../../model/types/comment';
import cls from './CommentItem.module.scss';

interface CommentItemProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentItem = memo(
  ({ className, comment, isLoading }: CommentItemProps) => {
    if (isLoading) {
      return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border='50%' />
            <Skeleton width={100} height={20} />
          </div>
          <Skeleton className={cls.text} width='100%' height={60} />
        </div>
      );
    }

    return (
      <div className={classNames(cls.CommentItem, {}, [className])}>
        <div className={cls.header}>
          {comment.user.avatar && (
            <Avatar src={comment.user.avatar} size={30} />
          )}
          <Text text={comment.user.username} />
        </div>
        <Text className={cls.text} text={comment.text} />
      </div>
    );
  }
);

CommentItem.displayName = 'CommentItem';

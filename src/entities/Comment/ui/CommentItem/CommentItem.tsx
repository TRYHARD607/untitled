import { memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';

import { type Comment } from '../../model/types/comment';
import cls from './CommentItem.module.scss';

interface CommentItemProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentItem = memo(
  ({ className, comment, isLoading }: CommentItemProps) => {
    const userProfileLink = `${RoutePath.profile}${comment?.user?.id}`;

    if (isLoading) {
      return (
        <div
          className={classNames(cls.CommentItem, {}, [className, cls.loading])}
        >
          <div className={cls.header}>
            <Skeleton width={30} height={30} border='50%' />
            <Skeleton width={100} height={20} />
          </div>
          <Skeleton className={cls.text} width='100%' height={60} />
        </div>
      );
    }

    if (!comment) {
      return;
    }

    return (
      <div className={classNames(cls.CommentItem, {}, [className])}>
        <AppLink to={userProfileLink} className={cls.header}>
          {comment.user.avatar && (
            <Avatar src={comment.user.avatar} size={30} />
          )}
          <Text text={comment.user.username} />
        </AppLink>
        <Text className={cls.text} text={comment.text} />
      </div>
    );
  }
);

CommentItem.displayName = 'CommentItem';

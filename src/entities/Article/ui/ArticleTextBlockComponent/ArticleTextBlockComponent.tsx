import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';

import { type ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    return (
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph, id) => (
          <Text
            key={paragraph + id}
            text={paragraph}
            className={cls.paragraph}
          />
        ))}
      </div>
    );
  }
);

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';

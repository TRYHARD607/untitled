import { ArticleView } from 'entities/Article';
import { memo, useCallback } from 'react';
import ListIcon from 'shared/assets/icons/list.svg';
import PlateIcon from 'shared/assets/icons/plate.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (val: ArticleView) => void;
}

const viewTypes = [
  { view: ArticleView.LIST, icon: ListIcon },
  { view: ArticleView.PLATE, icon: PlateIcon },
];

export const ArticleViewSelector = memo(
  ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = useCallback(
      (newView: ArticleView) => {
        return () => {
          onViewClick(newView);
        };
      },
      [onViewClick]
    );
    return (
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
        {viewTypes.map((viewType) => (
          <Button
            key={viewType.view}
            theme={ButtonTheme.CLEAR}
            onClick={onClick(viewType.view)}
          >
            <Icon
              Svg={viewType.icon}
              className={classNames('', {
                [cls.notSelected]: view !== viewType.view,
              })}
            />
          </Button>
        ))}
      </div>
    );
  }
);

ArticleViewSelector.displayName = 'ArticleViewSelector';

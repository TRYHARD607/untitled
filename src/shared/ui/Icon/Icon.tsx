import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => {
  return (
    <div className={classNames(cls.Icon, {}, [className])}>
      <Svg />
    </div>
  );
});

Icon.displayName = 'Icon';

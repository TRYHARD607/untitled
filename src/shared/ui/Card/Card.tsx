import { type HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ReactFCC } from 'shared/types/react';

import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card: ReactFCC<CardProps> = (props) => {
  const { className, children, ...other } = props;
  return (
    <div className={classNames(cls.Card, {}, [className])} {...other}>
      {children}
    </div>
  );
};

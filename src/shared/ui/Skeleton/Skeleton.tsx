import { type CSSProperties, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, border } = props;

  const styles: CSSProperties = { height, width, borderRadius: border };
  return (
    <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
  );
});

Skeleton.displayName = 'Skeleton';

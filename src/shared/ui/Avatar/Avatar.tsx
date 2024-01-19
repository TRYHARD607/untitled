import { type CSSProperties, useMemo } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => {
    return { width: size || 100, height: size || 100 };
  }, [size]);

  return (
    <img
      alt={alt || 'Avatar'}
      style={styles}
      src={src}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
};

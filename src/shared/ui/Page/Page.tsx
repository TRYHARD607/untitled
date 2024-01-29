import { type MutableRefObject, useRef } from 'react';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll/useInfiniteScroll';
import { classNames } from 'shared/lib/classNames/classNames';
import { type ReactFCC } from 'shared/types/react';

import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page: ReactFCC<PageProps> = ({
  className,
  children,
  onScrollEnd,
}) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};

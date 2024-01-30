import { type StateSchema } from 'app/providers/StoreProvider';
import {
  getSavedScrollByPath,
  scrollRestorationActions,
} from 'features/ScrollRestoration';
import { type MutableRefObject, type UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/hooks/useThrottle/useThrottle';
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
  const dispatch = useAppDispatch();
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getSavedScrollByPath(state, pathname)
  );

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollRestorationActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};

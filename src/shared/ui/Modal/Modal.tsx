import { useTheme } from 'app/providers/ThemeProvider';
import { useCallback, useEffect, useRef, useState } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import { type ReactFCC } from 'shared/types/react';
import { Portal } from 'shared/ui/Portal/Portal';

import cls from './Modal.module.scss';

const ANIMATION_DELAY = 300;

interface ModalProps {
  className?: string;
  isOpened?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: ReactFCC<ModalProps> = (props) => {
  const { className, children, isOpened, onClose, lazy } = props;

  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const { theme } = useTheme();
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  const onContentCLick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpened, onKeyDown]);

  useEffect(() => {
    if (isOpened) {
      setIsMounted(true);
    }
  }, [isOpened]);

  const mods: Mods = {
    [cls.opened]: isOpened,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}
      >
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentCLick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

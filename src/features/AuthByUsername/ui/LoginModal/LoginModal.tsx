import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';

import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
  className?: string;
  isOpened: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpened, onClose } = props;
  return (
    <Modal
      isOpened={isOpened}
      onClose={onClose}
      className={classNames('', {}, [className])}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};

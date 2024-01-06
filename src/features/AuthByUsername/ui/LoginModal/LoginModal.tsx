import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';

import { LoginForm } from '../LoginForm/LoginForm';

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
      <LoginForm />
    </Modal>
  );
};

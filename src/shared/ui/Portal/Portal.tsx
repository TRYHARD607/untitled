import { createPortal } from 'react-dom';
import { type ReactFCC } from 'shared/types/react';

interface PortalProps {
  element?: HTMLElement;
}

export const Portal: ReactFCC<PortalProps> = (props) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};

import { Provider } from 'react-redux';
import { type ReactFCC } from 'shared/types/react';

import { type StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: ReactFCC<StoreProviderProps> = ({
  children,
  initialState,
}) => {
  const store = createReduxStore(initialState as StateSchema);
  return <Provider store={store}>{children}</Provider>;
};

import { type StoryFn } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = // eslint-disable-next-line react/display-name
  (state: DeepPartial<StateSchema>) => (Story: StoryFn) =>
    (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    );

import { type StoryFn } from '@storybook/react';
import { type Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>
  (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );

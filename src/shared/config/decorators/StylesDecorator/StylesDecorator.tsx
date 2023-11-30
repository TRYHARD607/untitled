import 'app/styles/index.scss';

import { type StoryFn } from '@storybook/react';

export const StylesDecorator = (Story: StoryFn) => {
  console.log('DECORATOR');
  return (
    <>
      <Story />
    </>
  );
};

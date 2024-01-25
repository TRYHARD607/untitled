import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import AddNewCommentForm from './AddNewCommentForm';

const meta = {
  title: 'features/AddNewCommentForm',
  component: AddNewCommentForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddNewCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onSendComment: (val: string) => {
      console.log(val);
    },
  },
  decorators: [
    StoreDecorator({
      addNewComment: {
        text: 'Ad aute voluptate duis id tempor. Id consequat est nulla incididunt',
      },
    }),
  ],
};

// export const WithError: Story = {
//   args: {
//     onSendComment: (val: string) => {
//       console.log(val);
//     },
//   },
//   decorators: [
//     StoreDecorator({
//       addNewComment: {
//         error: 'Something went wrong :c',
//       },
//     }),
//   ],
// };

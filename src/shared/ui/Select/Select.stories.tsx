import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    label: 'select select',
    options: [
      { value: '1', content: 'first' },
      { value: '2', content: 'second' },
      { value: '3', content: 'third' },
    ],
  },
};

export const Readonly: Story = {
  args: {
    label: 'select select',
    options: [
      { value: '1', content: 'first' },
      { value: '2', content: 'second' },
      { value: '3', content: 'third' },
    ],
    readonly: true,
  },
};

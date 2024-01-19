import type { Meta, StoryObj } from '@storybook/react';
import Image from 'shared/assets/test/storybook.jpg';

import { Avatar } from './Avatar';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { size: 150, src: Image },
};

export const Small: Story = {
  args: { size: 50, src: Image },
};

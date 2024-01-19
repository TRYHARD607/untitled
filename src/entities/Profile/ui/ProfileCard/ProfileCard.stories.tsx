import type { Meta, StoryObj } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Image from 'shared/assets/test/storybook.jpg';

import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      first: 'User',
      lastname: 'User',
      age: 21,
      country: Country.USA,
      currency: Currency.USD,
      city: 'City',
      avatar: Image,
    },
    readonly: true,
  },
  decorators: [],
};

export const WithError: Story = {
  args: {
    error: 'asd',
  },
  decorators: [],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [],
};

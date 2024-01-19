import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Image from 'shared/assets/test/storybook.jpg';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        formData: {
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
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        formData: {
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
    }),
  ],
};

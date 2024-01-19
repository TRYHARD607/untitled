import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'features/EditableProfileCard/model/types/profileSchema';
import Image from 'shared/assets/test/storybook.jpg';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { EditableProfileCard } from './EditableProfileCard';

const meta = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  tags: ['autodocs'],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
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
          username: 'admin',
        },
        readonly: true,
      },
    }),
  ],
};

export const Dark: Story = {
  args: {},
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
          username: 'admin',
        },
        readonly: true,
      },
    }),
  ],
};

export const Editable: Story = {
  args: {},
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
          username: 'admin',
        },
        readonly: false,
      },
    }),
  ],
};

export const EditableDark: Story = {
  args: {},
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
          username: 'admin',
        },
        readonly: false,
      },
    }),
  ],
};

export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        formData: {
          first: '',
          lastname: '',
          age: 0,
          country: Country.USA,
          currency: Currency.USD,
          city: 'City',
          avatar: Image,
          username: 'admin',
        },
        readonly: false,
        validateErrors: [
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.INCORRECT_USER_DATA,
        ],
      },
    }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        isLoading: true,
        readonly: true,
      },
    }),
  ],
};

export const LoadingDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        isLoading: true,
        readonly: true,
      },
    }),
  ],
};

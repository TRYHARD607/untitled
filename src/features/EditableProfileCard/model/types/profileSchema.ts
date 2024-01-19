import { type Profile } from 'entities/Profile';

export interface ProfileSchema {
  data?: Profile;
  formData?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}

export enum ValidateProfileError {
  NO_DATA = 'NO_DATA',
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  SERVER_ERROR = 'SERVER_ERROR',
}

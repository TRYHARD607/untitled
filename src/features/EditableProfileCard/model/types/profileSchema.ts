import { type Profile } from 'entities/Profile';

export interface ProfileSchema {
  data?: Profile;
  formData?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}

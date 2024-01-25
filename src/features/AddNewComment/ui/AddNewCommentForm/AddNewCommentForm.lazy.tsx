import { type FC, lazy } from 'react';

import { type AddNewCommentFormProps } from './AddNewCommentForm';

export const AddNewCommentFormLazy = lazy<FC<AddNewCommentFormProps>>(
  async () => await import('./AddNewCommentForm')
);

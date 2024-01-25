import { type AddNewCommentSchema } from '../../types/addNewComment';
import {
  addNewCommentActions,
  addNewCommentReducer,
} from './addNewCommentSlice';

describe('addNewCommentSlice.test', () => {
  test('set text', () => {
    const state: DeepPartial<AddNewCommentSchema> = { text: '' };
    expect(
      addNewCommentReducer(
        state as AddNewCommentSchema,
        addNewCommentActions.setText('new text')
      )
    ).toEqual({
      text: 'new text',
    });
  });

  test('remove text', () => {
    const state: DeepPartial<AddNewCommentSchema> = { text: 'new text' };
    expect(
      addNewCommentReducer(
        state as AddNewCommentSchema,
        addNewCommentActions.setText('')
      )
    ).toEqual({
      text: '',
    });
  });
});

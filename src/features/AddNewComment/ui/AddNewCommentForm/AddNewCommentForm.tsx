import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  type ReducersList,
} from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import {
  getAddNewCommentError,
  getAddNewCommentText,
} from '../../model/selectors/addNewCommentSelectors';
import {
  addNewCommentActions,
  addNewCommentReducer,
} from '../../model/slice/addNewCommentSlice/addNewCommentSlice';
import cls from './AddNewCommentForm.module.scss';

const reducersList: ReducersList = {
  addNewComment: addNewCommentReducer,
};

export interface AddNewCommentFormProps {
  className?: string;
  onSendComment: (val: string) => void;
}

const AddNewCommentForm = memo(
  ({ className, onSendComment }: AddNewCommentFormProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const text = useSelector(getAddNewCommentText);
    const error = useSelector(getAddNewCommentError);

    const onCommentTextChange = useCallback(
      (val: string) => {
        dispatch(addNewCommentActions.setText(val));
      },
      [dispatch]
    );

    const onSendCommentHandler = useCallback(() => {
      onSendComment(text || '');
      onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
      <DynamicModuleLoader reducers={reducersList} removeAfterUnmount>
        <div className={classNames(cls.AddNewCommentForm, {}, [className])}>
          <Input
            className={cls.input}
            value={text}
            onChange={onCommentTextChange}
            placeholder={t('Enter a comment')}
          />
          <Button onClick={onSendCommentHandler} disabled={!text}>
            {t('Send')}
          </Button>
        </div>
      </DynamicModuleLoader>
    );
  }
);

AddNewCommentForm.displayName = 'AddNewCommentForm';

export default AddNewCommentForm;

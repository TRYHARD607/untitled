import { type Country } from 'entities/Country';
import { type Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { numberRegex } from 'shared/consts/regex';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';

import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { profileActions } from '../../model/slice/profileSlice';
import { EditableCardHeader } from '../EditableCardHeader/EditableCardHeader';

export const EditableProfileCard = () => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);

  const onChangeFirstName = useCallback(
    (val?: string) => {
      dispatch(profileActions.updateProfile({ first: val || '' }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (val: string) => {
      dispatch(profileActions.updateProfile({ lastname: val || '' }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (val?: string) => {
      dispatch(profileActions.updateProfile({ city: val || '' }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (val: string) => {
      if (numberRegex.test(val)) {
        dispatch(profileActions.updateProfile({ age: Number(val) || 0 }));
      }
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (val: string) => {
      dispatch(profileActions.updateProfile({ avatar: val || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <>
      <EditableCardHeader />
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        onChangeFirstName={onChangeFirstName}
        onChangeLastName={onChangeLastName}
        readonly={readonly}
        onChangeCity={onChangeCity}
        onChangeAge={onChangeAge}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </>
  );
};

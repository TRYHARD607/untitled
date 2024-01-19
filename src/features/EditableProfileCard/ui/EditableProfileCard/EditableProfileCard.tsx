import { type Country } from 'entities/Country';
import { type Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { numberRegex } from 'shared/consts/regex';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileValidationErrors } from '../../model/selectors/getProfileValidationErrors/getProfileValidationErrors';
import { profileActions } from '../../model/slice/profileSlice';
import { ValidateProfileError } from '../../model/types/profileSchema';
import { EditableCardHeader } from '../EditableCardHeader/EditableCardHeader';

export const EditableProfileCard = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);
  const validationErrors = useSelector(getProfileValidationErrors);

  const validationErrorsTranslate = {
    [ValidateProfileError.SERVER_ERROR]: t('Server error when saving'),
    [ValidateProfileError.NO_DATA]: t('No data'),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t(
      'Name and last name is required'
    ),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Country required'),
  };

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
      if (numberRegex.test(val) || !val) {
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
      {validationErrors?.length &&
        validationErrors.map((err) => (
          <Text
            key={err}
            theme={TextTheme.ERROR}
            text={validationErrorsTranslate[err]}
          />
        ))}
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

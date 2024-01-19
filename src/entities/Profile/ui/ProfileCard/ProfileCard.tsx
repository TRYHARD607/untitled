import { type Country, CountrySelect } from 'entities/Country';
import { type Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';

import { type Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstName?: (val: string) => void;
  onChangeLastName?: (val: string) => void;
  onChangeCity?: (val: string) => void;
  onChangeAge?: (val: string) => void;
  onChangeAvatar?: (val: string) => void;
  onChangeCurrency?: (val: Currency) => void;
  onChangeCountry?: (val: Country) => void;
  readonly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
    readonly,
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Something went wrong')}
          text={t('Please reload the page')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={t('Your name')}
          className={cls.input}
          onChange={onChangeFirstName}
          readOnly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Your lastname')}
          className={cls.input}
          onChange={onChangeLastName}
          readOnly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('Your age')}
          className={cls.input}
          onChange={onChangeAge}
          readOnly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('Your city')}
          className={cls.input}
          onChange={onChangeCity}
          readOnly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Avatar link')}
          className={cls.input}
          onChange={onChangeAvatar}
          readOnly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};

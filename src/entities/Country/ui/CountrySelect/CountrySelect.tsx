import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';

import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (val: Country) => void;
  readonly?: boolean;
}

const currencyOptions = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (val: string) => {
        onChange?.(val as Country);
      },
      [onChange]
    );

    return (
      <Select
        className={className}
        label={t('Country')}
        options={currencyOptions}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    );
  }
);

CountrySelect.displayName = 'CountrySelect';

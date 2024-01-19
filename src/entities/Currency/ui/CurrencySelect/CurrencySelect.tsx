import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';

import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (val: Currency) => void;
  readonly?: boolean;
}

const currencyOptions = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (val: string) => {
        onChange?.(val as Currency);
      },
      [onChange]
    );

    return (
      <Select
        className={className}
        label={t('Currency')}
        options={currencyOptions}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      />
    );
  }
);

CurrencySelect.displayName = 'CurrencySelect';

import { type ChangeEvent, memo, useMemo } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (val: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, onChange, readonly } = props;
  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option key={opt.value} value={opt.value} className={cls.option}>
          {opt.content}
        </option>
      )),
    [options]
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e?.target?.value);
  };

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && <span className={cls.label}>{label + '>'}</span>}
      <select
        onChange={onChangeHandler}
        className={cls.select}
        value={value}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});

Select.displayName = 'Select';

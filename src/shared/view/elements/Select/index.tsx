import { useCallback } from 'react';
import ReactSelect, { MultiValue, SingleValue } from 'react-select'

import { Option } from 'shared/types/utils';

import './style.scss';

type Props<T extends string | number> = {
  options: Option<T>[];
  value: T[];
  placeholder?: string;
  onChange(option: Option<T>[]): void;
  isMulti?: boolean;
};

function Select<T extends string | number>(props: Props<T>) {
  const { options, value, placeholder, onChange, isMulti } = props;

  const handleChange = useCallback((newValue: SingleValue<Option<T>> | MultiValue<Option<T>>) => {
    const value = Array.isArray(newValue) ? newValue : [newValue].filter(x => x !== null);
    onChange(value);
  }, [onChange]);

  return (
    <ReactSelect
      className="custom-select"
      placeholder={placeholder}
      options={options}
      onChange={handleChange}
      isMulti={isMulti}
      value={options.filter((opt) => value.includes(opt.value))}
      styles={{
         menu: (styles) => ({ ...styles, zIndex: 2 }),
      }}
    />
  );
}

export { Select };

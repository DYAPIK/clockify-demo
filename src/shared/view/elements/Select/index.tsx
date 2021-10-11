import { useCallback } from 'react';
import ReactSelect, { SingleValue } from 'react-select'

import { Option } from 'shared/types/utils';

import './style.scss';

type Props<T extends string | number> = {
  options: Option<T>[];
  value?: T;
  placeholder?: string;
  onChange(option: Option<T>): void;
};

function Select<T extends string | number>(props: Props<T>) {
  const { options, value, placeholder, onChange } = props;

  const handleChange = useCallback((option: SingleValue<Option<T>>) => {
    if (option) {
      onChange(option);
    }
  }, [onChange]);

  return (
    <ReactSelect
      className="custom-select"
      placeholder={placeholder}
      options={options}
      onChange={handleChange}
      value={options.find((opt) => opt.value === value)}
    />
  );
}

export { Select };

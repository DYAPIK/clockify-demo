import { Radio as RadioMUI, RadioProps } from '@mui/material';
import { useCallback } from 'react';

type Props = {
  onChange?(value: string): void;
  value?: string;
  checked?: boolean;
} & Omit<RadioProps, 'onChange'>;

function Radio(props: Props) {
  const { onChange, value, checked } = props;

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange && onChange(value);
  }, [onChange]);

  return (
    <RadioMUI
      {...props}
      onChange={handleChange}
      value={value}
      checked={checked}
    />
  );
}

export { Radio };

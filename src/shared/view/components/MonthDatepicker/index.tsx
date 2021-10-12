import DatePicker from '@mui/lab/DatePicker';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

type Props = {
  value: any;
  onChange(date: Date | null): void
};

function MonthDatepicker({ value, onChange }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={['year', 'month']}
        label="Выберите месяц и год"
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
}

export { MonthDatepicker };

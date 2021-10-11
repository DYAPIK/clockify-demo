import { Button as ButtonMUI, ButtonProps } from '@mui/material';

type Props = ButtonProps;

function Button(props: Props) {
  return (
    <ButtonMUI
      variant="contained"
      {...props}
    />
  );
}

export { Button };

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

type Props = {
  isShow: boolean;
  size?: number;
}

function Preloader({ isShow, size }: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Fade in={isShow}>
        <CircularProgress size={size} />
      </Fade>
    </Box>
  );
}

export { Preloader };

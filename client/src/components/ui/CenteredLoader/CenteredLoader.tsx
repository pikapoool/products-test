import { CircularProgress, Box } from '@mui/material';

export const CenteredLoader = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: '100px' }} data-testid='loader'>
      <CircularProgress />
    </Box>
  );
};

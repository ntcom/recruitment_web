import type { Theme, ThemeOptions } from '@mui/material/styles';

const LoadingButton = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiLoadingButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  };
};

export default LoadingButton;

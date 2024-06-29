import type { Theme, ThemeOptions } from '@mui/material/styles';

const LinearProgress = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      },
    },
  };
};

export default LinearProgress;

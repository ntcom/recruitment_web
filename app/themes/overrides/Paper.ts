import type { Theme, ThemeOptions } from '@mui/material/styles';

const Paper = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiPaper: {
      defaultProps: {
        square: true,
      },
    },
  };
};

export default Paper;

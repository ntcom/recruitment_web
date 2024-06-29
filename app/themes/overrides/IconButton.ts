import type { Theme, ThemeOptions } from '@mui/material/styles';

const IconButton = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          borderRadius: 'revert',
        },
      },
    },
  };
};

export default IconButton;

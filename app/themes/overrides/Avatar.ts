import type { Theme, ThemeOptions } from '@mui/material/styles';

const Avatar = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiAvatar: {
      defaultProps: {
        variant: "square"
      },
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: 0,
          backgroundColor: '#6B7280',
          color: '#FFFFFF',
        },
      },
    },
  };
};

export default Avatar;

import type { Theme, ThemeOptions } from '@mui/material/styles';

const Link = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  };
};

export default Link;

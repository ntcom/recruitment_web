import type { Theme, ThemeOptions } from '@mui/material/styles';

const Icon = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiIcon: {
      defaultProps: {
        fontSize: 'small',
      },
    },
  };
};

export default Icon;

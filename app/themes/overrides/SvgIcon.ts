import type { Theme, ThemeOptions } from '@mui/material/styles';

const SvgIcon = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'small',
      },
    },
  };
};

export default SvgIcon;

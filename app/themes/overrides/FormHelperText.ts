import type { Theme, ThemeOptions } from '@mui/material/styles';

const MuiFormHelperText = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiFormHelperText: {
      defaultProps: {
        variant: 'standard',
      },
    },
  };
};

export default MuiFormHelperText;

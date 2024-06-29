import type { Theme, ThemeOptions } from '@mui/material/styles';

const FormControlLabel = (theme: Theme): ThemeOptions['components'] => {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          '&.Mui-disabled': {
            color: theme.palette.text.primary,
          },
        },
      },
    },
  };
};

export default FormControlLabel;

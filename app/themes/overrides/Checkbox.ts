import type { Theme, ThemeOptions } from '@mui/material/styles';

const Checkbox = (theme: Theme): ThemeOptions['components'] => {
  return {
    MuiCheckbox: {
      defaultProps: {
        size: 'small',
      },
    },
  };
};

export default Checkbox;

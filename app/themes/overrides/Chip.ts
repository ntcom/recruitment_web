import type { Theme, ThemeOptions } from '@mui/material/styles';

const Chip = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiChip: {
      defaultProps: {
        size: 'small',
      },
    },
  };
};

export default Chip;

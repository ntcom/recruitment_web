import type { Theme, ThemeOptions } from '@mui/material/styles';

const TableCell = (_theme: Theme): ThemeOptions['components'] => {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #E6E8F0',
        },
      },
    },
  };
};

export default TableCell;

import type { Theme, ThemeOptions } from "@mui/material/styles";

const Select = (_theme: Theme): ThemeOptions["components"] => {
  return {
    MuiSelect: {
      defaultProps: {
        size: "medium",
        variant: "outlined",
        MenuProps: {
          disableAutoFocusItem: true,
          PaperProps: {
            elevation: 1,
            square: true,
          },
        },
      },
    },
  };
};

export default Select;

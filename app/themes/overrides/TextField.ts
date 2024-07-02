import type { Theme, ThemeOptions } from "@mui/material/styles";

const TextField = (_theme: Theme): ThemeOptions["components"] => {
  return {
    MuiTextField: {
      defaultProps: {
        size: "medium",
        variant: "outlined",
      },
      styleOverrides: {
        root: {},
      },
    },
  };
};

export default TextField;

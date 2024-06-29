import type { Theme, ThemeOptions } from "@mui/material/styles";

const OutlinedInput = (theme: Theme): ThemeOptions["components"] => {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "revert",
          "&.Mui-disabled": {
            backgroundColor: theme.palette.app.background.disableField,
          },
        },
        input: {
          "&.Mui-disabled": {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.app.background.disableField,
            WebkitTextFillColor: theme.palette.text.primary,
            userSelect: "revert",
          },
        },
      },
    },
  };
};

export default OutlinedInput;

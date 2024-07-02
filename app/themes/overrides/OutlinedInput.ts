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
          borderColor: "#ebebeb",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #333",
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

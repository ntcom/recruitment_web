import type { Theme, ThemeOptions } from "@mui/material/styles";

const Button = (_theme: Theme): ThemeOptions["components"] => {
  return {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "medium",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: "revert",
          color: _theme.palette.common.white,
          ":hover": {
            backgroundColor: _theme.palette.primary.light,
          },
        },
        endIcon: {
          fontSize: "12px",
        },
        startIcon: {
          fontSize: "12px",
        },
      },
    },
  };
};

export default Button;

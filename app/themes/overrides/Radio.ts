import type { Theme, ThemeOptions } from "@mui/material/styles";

const Radio = (_theme: Theme): ThemeOptions["components"] => {
  return {
    MuiRadio: {
      defaultProps: {
        size: "medium",
      },
    },
  };
};

export default Radio;

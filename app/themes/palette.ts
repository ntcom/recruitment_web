import type { ThemeOptions } from "@mui/material";
import type { AppConstantTheme } from ".";
import themesConfig from "./config";

// Transpora palette
const app: AppConstantTheme = {
  pagination: "#fde428",
  background: {
    disableField: "#e9ecef",
  },
  text: {
    white: "#FFFFFF",
  },
};

const palette: ThemeOptions = {
  palette: {
    mode: "light",
    app,
    background: {
      default: "#f4f5f7",
      paper: "#FFFFFF",
    },
    ...themesConfig.color,
  },
};

export default palette;

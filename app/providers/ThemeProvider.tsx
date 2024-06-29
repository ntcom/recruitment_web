"use client";
import React, { useMemo } from "react";
import { createTheme } from "../themes";
import { ThemeProvider as WrapperTheme } from "@mui/material";

function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useMemo(() => createTheme(), []);
  return <WrapperTheme theme={theme}>{children}</WrapperTheme>;
}

export default ThemeProvider;

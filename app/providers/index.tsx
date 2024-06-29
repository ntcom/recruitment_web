import React from "react";
import { AuthProvider } from "./AuthProvider";
import ThemeProvider from "./ThemeProvider";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>{children} </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default Provider;

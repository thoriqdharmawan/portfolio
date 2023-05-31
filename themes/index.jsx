"use client"

import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export const ThemeCustomization = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

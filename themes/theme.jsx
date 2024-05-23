import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "6px 16px",
          fontWeight: "600",
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

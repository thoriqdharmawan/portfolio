import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }, 
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "6px 16px",
          fontWeight: '600'
        }
      }
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})
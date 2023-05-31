import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }, 
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})
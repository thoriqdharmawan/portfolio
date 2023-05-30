import { Box } from "@mui/material";

export default ({ children }) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      {children}
    </Box>
  );
};

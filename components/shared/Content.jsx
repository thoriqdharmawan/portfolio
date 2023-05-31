import { Paper } from "@mui/material";

export default ({ children }) => {
  return (
    <Paper
      sx={{
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      {children}
    </Paper>
  );
};

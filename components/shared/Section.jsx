import { Container, Paper } from "@mui/material";

export default ({ children }) => {
  return (
    <Paper component="section" elevation={0} sx={{ py: 14 }}>
      <Container maxWidth="lg">{children}</Container>
    </Paper>
  );
};

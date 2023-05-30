import { Container, Paper } from "@mui/material";

export default ({ children }) => {
  return (
    <Paper elevation={0} sx={{ py: 6 }}>
      <Container maxWidth="lg">{children}</Container>
    </Paper>
  );
};

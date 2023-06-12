import { Container, Paper } from "@mui/material";

export default ({ children, bgcolor }) => {
  return (
    <Paper
      component="section"
      sx={{ py: 14, backgroundColor: bgcolor, borderRadius: 0 }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Paper>
  );
};

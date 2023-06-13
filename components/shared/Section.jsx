import { Container, Paper } from "@mui/material";

export default ({ children, bgcolor, withContainer = true }) => {
  return (
    <Paper
      component="section"
      sx={{ py: 14, backgroundColor: bgcolor, borderRadius: 0 }}
    >
      {withContainer ? (
        <Container maxWidth="lg">{children}</Container>
      ) : (
        <div>{children}</div>
      )}
    </Paper>
  );
};

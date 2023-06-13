import { Container, Paper } from "@mui/material";

export default ({ children, bgcolor, withContainer = true, py = 14 }) => {
  return (
    <Paper
      component="section"
      sx={{ py, backgroundColor: bgcolor, borderRadius: 0 }}
    >
      {withContainer ? (
        <Container maxWidth="lg">{children}</Container>
      ) : (
        <div>{children}</div>
      )}
    </Paper>
  );
};

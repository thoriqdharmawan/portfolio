import { Container, Paper } from "@mui/material";

export default ({
  children,
  bgcolor,
  withContainer = true,
  py = 14,
  boxShadow,
}) => {
  return (
    <Paper
      component="section"
      sx={{
        py,
        backgroundColor: bgcolor,
        borderRadius: 0,
        ...(!!boxShadow && { boxShadow }),
      }}
    >
      {withContainer ? (
        <Container maxWidth="lg">{children}</Container>
      ) : (
        <div>{children}</div>
      )}
    </Paper>
  );
};

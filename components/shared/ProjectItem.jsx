import { Box, Button, Paper, Typography } from "@mui/material";

export default ({ src, name, description }) => {
  return (
    <Paper
      elevation={0}
      sx={{ maxWidth: "371px", padding: 2, borderRadius: 4 }}
    >
      <Box sx={{ "& img": { width: "100%", height: "auto" } }}>
        <img src={src} alt={name} />
      </Box>
      <Box my={2}>
        <Typography variant="h5" component="h4" mb={2} fontWeight="600">
          {name}
        </Typography>
        <Typography variant="subtitle1" component="p">
          {description}
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="subtitle2" fontWeight="600">
          Role
        </Typography>
        <Typography variant="subtitle1" component="p">
          Frontend Developer
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="subtitle2" fontWeight="600">
          Technology
        </Typography>
        <Typography variant="subtitle1" component="p">
          ReactJs, MaterialUI, GraphQL
        </Typography>
      </Box>

      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button variant="text">See More</Button>
      </Box>
    </Paper>
  );
};

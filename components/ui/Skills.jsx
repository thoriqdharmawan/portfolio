import { Box, Button, Grid, Typography } from "@mui/material";
import Section from "../shared/Section";
import SkillsPack from "../shared/SkillsPack";

export default () => {
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SkillsPack />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography variant="h2" fontWeight="bold" mb={2}>
              Huge pack of Skills
            </Typography>

            <Button variant="contained">Show All Skills</Button>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

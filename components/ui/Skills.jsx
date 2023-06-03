import { Grid, Typography } from "@mui/material";
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
          <Typography variant="h2" fontWeight="bold">
            Huge pack of Skills
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};

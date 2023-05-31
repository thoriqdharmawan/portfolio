import { Grid, Typography } from "@mui/material";
import Section from "../shared/Section";
import ComponentPack from "../shared/ComponentPack";

export default () => {
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ComponentPack />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2" fontWeight="bold" mb={8}>
            Interactions?
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};

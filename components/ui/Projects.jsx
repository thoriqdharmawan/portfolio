import { Grid, Paper, Typography } from "@mui/material";
import Section from "../shared/Section";
import ProjectItem from "../shared/ProjectItem";

export default () => {
  return (
    <Section bgcolor="#f1f1f1">
      <Typography variant="h2" component="h2" textAlign="center" mb={5}>
        Title Project
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={4}>
          <ProjectItem
            src="/thumbnail.svg"
            name="UI/UX Desainer"
            description="Lorem Ipsum is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s"
          />
        </Grid>
        <Grid item xs={4}>
          <ProjectItem
            src="/thumbnail.svg"
            name="UI/UX Desainer"
            description="Lorem Ipsum is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s"
          />
        </Grid>
        <Grid item xs={4}>
          <ProjectItem
            src="/thumbnail.svg"
            name="UI/UX Desainer"
            description="Lorem Ipsum is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s"
          />
        </Grid>
        <Grid item xs={4}>
          <ProjectItem
            src="/thumbnail.svg"
            name="UI/UX Desainer"
            description="Lorem Ipsum is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s"
          />
        </Grid>
      </Grid>
    </Section>
  );
};

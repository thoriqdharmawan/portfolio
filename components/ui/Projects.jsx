import { Grid, Typography } from "@mui/material";
import { PROJECTS } from "@/constant/global";

import Section from "../shared/Section";
import ProjectItem from "../shared/ProjectItem";

export default () => {
  return (
    <Section bgcolor="#f1f1f1">
      <Typography variant="h2" align="center" fontWeight="bold" mb={8}>
        Projects
      </Typography>

      <Grid container spacing={4}>
        {PROJECTS.map((res, idx) => (
          <Grid key={idx} item xs={12} sm={6} lg={4}>
            <ProjectItem
              src={res.src}
              name={res.name}
              role={res.role}
              technologies={res.technologies}
              description={res.description}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

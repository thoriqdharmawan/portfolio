"use client";

import { Grid, Typography } from "@mui/material";
import { PROJECTS } from "@/constant/global";

import Section from "@/components/shared/Section";
import ProjectItem from "@/components/shared/ProjectItem";

export default function page() {
  return (
    <Section bgcolor="#f1f1f1">
      <Typography variant="h2" align="center" fontWeight="bold" mb={8}>
        Projects
      </Typography>

      <Grid container spacing={3}>
        {PROJECTS.map((res, idx) => (
          <Grid key={idx} item xs={12} sm={6} lg={4}>
            <ProjectItem
              thumbnails={res.thumbnails}
              name={res.name}
              role={res.role}
              url={res.url}
              technologies={res.technologies}
              description={res.description}
              slug={res.slug}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

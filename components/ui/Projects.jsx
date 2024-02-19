import { Grid, Typography, Button, Box } from "@mui/material";
import { PROJECTS } from "@/constant/global";
import Link from "next/link";

import Section from "../shared/Section";
import ProjectItem from "../shared/ProjectItem";

export default () => {
  return (
    <Section bgcolor="#f1f1f1">
      <Typography variant="h2" align="center" fontWeight="bold" mb={8}>
        Projects
      </Typography>

      <Grid container spacing={3}>
        {PROJECTS.slice(0, 3).map((res, idx) => (
          <Grid key={idx} item xs={12} sm={6} lg={4}>
            <ProjectItem
              thumbnails={res.thumbnails}
              name={res.name}
              role={res.role}
              url={res.url}
              urlLabel={res.urlLabel}
              technologies={res.technologies}
              description={res.description}
              slug={res.slug}
            />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button component={Link} href="/projects">
          See All Projects
        </Button>
      </Box>
    </Section>
  );
};

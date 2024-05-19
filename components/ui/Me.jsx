import { Box, Button, Grid, Paper, Typography } from "@mui/material";

import Section from "../shared/Section";
import Image from "next/image";
import { SKILLS } from "@/constant/global";

const Me = () => {
  return (
    <Section>
      <Grid container spacing={5}>
        <Grid item sm={12} md={12} sx={styles.gridItem}>
          <Box>
            <Box>
              <Typography variant="h6" sx={styles.aboutMe}>
                About Me
              </Typography>
              <Typography variant="h5" mb={2} sx={styles.imFulltime}>
                Hi, I am a Fulltime Software Engineer.
              </Typography>
              <Typography mb={2} sx={{ textAlign: "justify" }}>
                I’m Thoriq Dharmawan, a Frontend Developer with 4+ years of
                experience. I build apps with ReactJs, NextJs, Tailwind,
                TypeScript, and more. I stay on top of the latest tech trends to
                deliver top-notch results for my clients.
              </Typography>
              <Typography mb={2} sx={{ textAlign: "justify" }}>
                Some of the technologies that I have been making apps with:
              </Typography>
            </Box>

            <Grid container spacing={1}>
              {SKILLS.slice(0, 6).map((data, idx) => (
                <Grid key={idx} item xs={6}>
                  <Box display="flex" justifyItems="center" alignItems="center">
                    <Paper elevation={0} sx={styles.skillIcon}>
                      <Image
                        src={data?.src}
                        alt={data?.name}
                        width={38}
                        height={38}
                        sizes="(max-width: 768px) 20px"
                      />
                    </Paper>
                    <Typography>{data?.name}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Button sx={{ mt: 3 }} variant="outlined">
              See All Skills
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Me;

const styles = {
  gridContainer: (theme) => ({
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  }),
  gridItem: (theme) => ({
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0px !important",
    },
  }),
  gridItemPhoto: (theme) => ({
    display: "flex",
    width: "100%",
    justifyContent: "end",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }),
  image: {
    borderRadius: "18px",
  },
  aboutMe: (theme) => {
    return {
      color: theme.palette.success.main,
    };
  },
  imFulltime: {
    fontWeight: 600,
  },
  skillIcon: {
    width: "fit-content",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    position: "relative",
    marginRight: 2,
    "&:hover": {
      boxShadow: "rgba(145, 158, 171, 0.16) 0px 24px 48px 0px",
    },
  },
};

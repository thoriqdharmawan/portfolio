import { Box, Grid, Typography } from "@mui/material";

import Section from "../shared/Section";
import Image from "next/image";

const Me = () => {
  return (
    <Section>
      <Grid container spacing={5}>
        <Grid item lg={6} sx={styles.gridItemPhoto}>
          <Image
            src="/images/me.jpg"
            width={440}
            height={440}
            alt="Thoriq Dharmawan"
            style={styles.image}
          />
        </Grid>
        <Grid item md={12} lg={6} sx={styles.gridItem}>
          <Box>
            <Typography>About Me</Typography>
            <Typography>Hi, I am a Fulltime Software Engineer.</Typography>
            <Typography>
              There is no space and time to me for being lazy. Life is to short
              for being stagnant, in that so I love absorbing knowledge and
              solving challanges.
            </Typography>
            <Typography>
              Some of the technologies that I have been making apps with:
            </Typography>
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
  gridItem: {
    display: "flex",
    width: "100%",
  },
  gridItemPhoto: (theme) => ({
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }),
  image: {
    borderRadius: "18px",
    marginLeft: "auto",
  },
};

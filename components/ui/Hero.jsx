import { Box, Container, Grid, Typography, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

import { firstKeyframesHero, secondKeyframesHero } from "../providers/animated";

const Img = ({ width, src, animation }) => {
  return (
    <Box
      sx={{
        width,
        display: "flex",
        position: "relative",
        userSelect: "none",
        "& img": {
          position: "absolute",
          display: "block",
          maxWidth: "100%",
          animation: `${animation} 200s linear infinite`,
        },
      }}
    >
      <img src={src} alt="Hero Image" />
    </Box>
  );
};

const FEATURED = [
  {
    src: "/skills/ic_skill_ts.svg",
    alt: "typescript",
  },
  {
    src: "/skills/ic_skill_redux.svg",
    alt: "redux",
  },
  {
    src: "/skills/ic_skill_react.svg",
    alt: "react",
  },
];

export default () => {
  return (
    <>
      <Box
        position="fixed"
        width="100%"
        height={"calc(100vh - 56px)"}
        mt="56px"
        top={0}
        left={0}
        backgroundColor="#f1f1f1"
      >
        <Container maxWidth="lg" sx={{ height: "100vh", pt: 16 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={styles.gridItemHeader}>
              <Typography sx={styles.subTitle} variant="p" component="p">
                Hi! Im Thoriq Dharmawan
              </Typography>
              <Typography
                sx={styles.title}
                variant="h1"
                component="h1"
                fontWeight="bold"
              >
                Frontend Developer
              </Typography>
              <Box>
                <Box sx={styles.featuredSkills}>
                  {FEATURED?.map((props, id) => (
                    <Image key={id} {...props} height={38} width={38} />
                  ))}
                </Box>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/thoriqdharmawan/"
                  rel="noopener noreferrer"
                >
                  <Button
                    sx={{ mt: 3 }}
                    variant="outlined"
                    startIcon={<LinkedInIcon />}
                  >
                    Linkedin
                  </Button>
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={styles.heroWrappper}>
                <Img
                  src="/hero_light_1.png"
                  width="344px"
                  animation={firstKeyframesHero}
                />
                <Img
                  src="/hero_light_2.png"
                  width="720px"
                  animation={secondKeyframesHero}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ height: "100vh", boxSizing: "inherit" }}></Box>
    </>
  );
};

const styles = {
  gridItemHeader: (theme) => ({
    [theme.breakpoints.down("md")]: {
      position: "relative",
      zIndex: 2,
    },
  }),
  subTitle: (theme) => ({
    mb: 2,
    fontSize: 24,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
  }),
  title: (theme) => ({
    [theme.breakpoints.down("md")]: {
      fontSize: 64,
    },
  }),
  heroWrappper: (theme) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    height: "100%",
    position: "absolute",
    transform: "skew(-16deg, 4deg)",
    [theme.breakpoints.down("md")]: {
      opacity: 0.8,
    },
  }),
  featuredSkills: {
    display: "flex",
    gap: 3,
    mt: 1,
    flexWrap: "wrap",
    maxWidth: "400px",
  },
};

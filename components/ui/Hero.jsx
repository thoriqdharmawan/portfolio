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

const ProfileBox = () => {
  return (
    <Box sx={styles.profileBoxContainer}>
      <Box sx={styles.profile}>
        <Image
          src="/images/me.jpg"
          width={320}
          height={320}
          alt="Thoriq Dharmawan"
          style={styles.image}
        />
        <Typography sx={styles.name}>Thoriq Dharmawan</Typography>
        <Box sx={styles.featuredSkills}>
          {FEATURED?.map((props, id) => (
            <Image key={id} {...props} height={24} width={24} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const RunningBg = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
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
        <Container maxWidth="lg" sx={styles.container}>
          <Grid sx={{ position: "relative", zIndex: 1 }} container rowGap={2}>
            <Grid item xs={12} md={6} sx={styles.gridItemHeader}>
              <Typography sx={styles.subTitle} variant="p" component="p">
                Hi there
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
            <Grid sx={{ position: "relative" }} item xs={12} md={6}>
              <ProfileBox />
            </Grid>
          </Grid>
        </Container>

        <RunningBg />
      </Box>
      <Box sx={{ height: "100vh", boxSizing: "inherit" }}></Box>
    </>
  );
};

const styles = {
  container: (theme) => ({
    height: "100vh",
    pt: 16,
    [theme.breakpoints.down("md")]: {
      pt: 2,
    },
  }),
  gridItemHeader: (theme) => ({
    [theme.breakpoints.down("md")]: {
      position: "relative",
      zIndex: 2,
      textAlign: "center",
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
    filter: "blur(2px)",
    transform: "skew(-16deg, 4deg)",
    [theme.breakpoints.down("md")]: {
      opacity: 0.8,
    },
  }),
  featuredSkills: {
    display: "flex",
    gap: 2,
    mt: 1,
    flexWrap: "wrap",
    maxWidth: "400px",
  },
  profileBoxContainer: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    zIndex: 1,
    width: "100%",
  },
  profile: {
    backgroundColor: "#fff",
    padding: 3,
    borderRadius: 6,
    boxShadow: "rgba(145, 158, 171, 0.16) 0px 24px 48px 0px",
  },
  image: {
    borderRadius: "18px",
    marginBottom: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
  },
};

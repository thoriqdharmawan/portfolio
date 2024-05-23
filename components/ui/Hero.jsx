import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

import { firstKeyframesHero, secondKeyframesHero } from "../providers/animated";
import { SKILLS } from "@/constant/global";
import ImageSwithcer from "@/components/shared/ImageSwithcer";

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
    src: "/skills/ic_skill_next.svg",
    alt: "NextJs",
  },
  {
    src: "/skills/ic_skill_tailwind.svg",
    alt: "Tailwind",
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
          <Box sx={styles.profileContainer}>
            <Box sx={styles.profile}>
              <ImageSwithcer
                alt="Thoriq Dharmawan"
                src="/images/me.jpg"
                size={{ large: 200, small: 90 }}
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography variant="h5" mb={2} sx={styles.imFulltime}>
                Hi, I am a Software Engineer.
              </Typography>
              <Typography mb={2}>
                I'm Thoriq Dharmawan, a Software Engineer with 4+ years of
                experience. I build apps using NextJs, Tailwind, and TypeScript.
                I'm always exploring new technologies to deliver top-notch
                results.
              </Typography>
            </Box>

            <Grid container spacing={1} maxWidth={440}>
              {SKILLS.slice(0, 4).map((data, idx) => (
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
                    <Typography fontWeight="600">{data?.name}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

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
          </Box>
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
    pt: 6,
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
    fontSize: 48,
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
    right: -300,
    [theme.breakpoints.down("lg")]: {
      opacity: 0.3,
      filter: "blur(2px)",
      transform: "skew(-16deg, 4deg)",
      right: 0,
    },
    [theme.breakpoints.up("lg")]: {
      right: -470,
    },
    [theme.breakpoints.up("xl")]: {
      right: -320,
    },
    [theme.breakpoints.up("xxl")]: {
      right: -150,
    },
    // [theme.breakpoints.up("lg")]: {
    //   right: -350,
    // },
  }),
  featuredSkills: {
    display: "flex",
    gap: 2,
    mt: 1,
    flexWrap: "wrap",
    maxWidth: "400px",
  },
  profileContainer: (theme) => ({
    maxWidth: "50%",
    zIndex: 9,
    position: "relative",
    textAlign: "justify",
    [theme.breakpoints.up("xl")]: {
      maxWidth: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }),
  profileBoxContainer: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    zIndex: 1,
    width: "100%",
  },
  profile: (theme) => ({
    backgroundColor: "#fff",
    padding: 2,
    borderRadius: 4,
    boxShadow: "rgba(145, 158, 171, 0.16) 0px 24px 48px 0px",
    width: "fit-content",
    [theme.breakpoints.down("lg")]: {
      padding: 1,
    },
  }),
  image: {
    borderRadius: "12px",
    marginBottom: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
  },
  aboutMe: (theme) => {
    return {
      color: theme.palette.success.main,
    };
  },
  imFulltime: {
    fontWeight: 600,
    fontSize: 32,
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

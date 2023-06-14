import { Box, Container, Grid, Typography } from "@mui/material";
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
        <Container maxWidth="lg" sx={{ height: "100vh", pt: 6 }}>
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
};

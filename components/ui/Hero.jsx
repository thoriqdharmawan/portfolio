import { css, keyframes } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";

const firstKeyframes = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-58%);
  }
  100% {
    transform: translateY(0);
  }
`;

const secondKeyframes = keyframes`
  0% {
    transform: translateY(-70%);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-70%);
  }
`;

const Img = ({ width, src, first }) => {

  const animated = css`
    position: absolute;
    display: block;
    max-width: 100%;
    animation: ${first ? firstKeyframes : secondKeyframes} 200s linear infinite;
  `;

  return (
    <Box
      sx={{
        width,
        display: "flex",
        position: "relative",
        userSelect: 'none',
        "& img": {
          position: "absolute",
          display: "block",
          maxWidth: "100%",
          ...animated,
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
        sx={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          top: 0,
          left: 0,
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100vh", pt: 6 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h1" component="h1" fontWeight="bold">
                Frontend Developer
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  height: "100%",
                  position: "absolute",
                }}
              >
                <Img src="/hero_light_1.png" width="344px" first />
                <Img src="/hero_light_2.png" width="720px" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ height: "100vh", boxSizing: "inherit" }}></Box>
    </>
  );
};

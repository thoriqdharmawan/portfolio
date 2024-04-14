"use client";

import { cloneElement } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import Link from "next/link";

import { NAVIGATIONS } from "@/constant/global";
import Info from "./Info";

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: 0,
    sx: {
      backgroundColor: "#fff",
      boxShadow: trigger ? "rgba(149, 157, 165, 0.2) 0px 8px 24px" : "none",
    },
  });
};

const Header = (props) => {
  return (
    <header>
      <ElevationScroll {...props}>
        <AppBar>
          {/* <Box sx={{ backgroundColor: "rgb(255, 244, 229)" }}>
            <Container maxWidth="lg">
              <Info />
            </Container>
          </Box> */}

          <Container maxWidth="lg">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0xp 0px",
              }}
            >
              <Typography
                sx={styles.logo}
                color="#000"
                variant="h6"
                component={Link}
                href="/"
              >
                Thoriq Dharmawan
              </Typography>
              <Box display="flex" gap={3}>
                {/* {NAVIGATIONS.map((res) => (
                  <Typography
                    sx={styles.navigation}
                    color="#000"
                    variant="p"
                    key={res.label}
                    component={Link}
                    href={res.href}
                  >
                    {res.label}
                  </Typography>
                ))} */}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </header>
  );
};

export default Header;

const styles = {
  logo: (theme) => ({
    fontWeight: 700,
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  }),
  navigation: (theme) => ({
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  }),
};

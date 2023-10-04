import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Section from "../shared/Section";
import SkillsPack from "../shared/SkillsPack";
// import BubbleSkills from "../shared/BubbleSkils";

export default () => {
  return (
    <Section py={2}>
      <Grid container spacing={2} sx={styles.gridContainer}>
        <Grid item lg={6} sx={styles.gridItem}>
          {/* <BubbleSkills /> */}
        </Grid>
        <Grid item md={12} lg={6} sx={styles.gridItem}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h2" fontWeight="bold" mb={2}>
              Huge pack of Skills
            </Typography>

            <Button component={Link} href="/skills" variant="contained">
              Show All Skills
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

const styles = {
  gridContainer: (theme) => ({
    flexDirection: "row",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column-reverse",
    },
  }),
  gridItem: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
  },
};

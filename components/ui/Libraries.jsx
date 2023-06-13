import { Box, Button, Typography } from "@mui/material";

import { LIBRARIES } from "@/constant/global";

import Section from "../shared/Section";
import ItemLibraries from "../shared/ItemLibraries";

export default () => {
  return (
    <Section bgcolor="#151C26">
      <Typography variant="h2" mb={4} color="#fff">
        Libraries
      </Typography>

      <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {LIBRARIES.map((res) => (
          <ItemLibraries
            key={res.title}
            title={res.title}
            description={res.description}
            url={res.url}
          />
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="xl"
          component="a"
          target="_black"
          href="https://www.npmjs.com/settings/thoriqdharmawan/packages"
          rel="noopener noreferrer"
          fullWidth={false}
          sx={{
            color: "#fff",
            mt: 6,
            fontSize: 16,
          }}
        >
          See More
        </Button>
      </Box>
    </Section>
  );
};

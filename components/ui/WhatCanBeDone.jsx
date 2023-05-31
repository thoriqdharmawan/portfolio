import { Stack, Typography } from "@mui/material";
import Section from "../shared/Section";
import FeatureItem from "../shared/FeatureItem";

export default () => {
  return (
    <Section>
      <Typography variant="h2" align="center" fontWeight="bold" mb={8}>
        What can be done?
      </Typography>

      <Stack
        flexDirection="row"
        justifyContent="space-evenly"
        flexWrap="wrap"
        gap={4}
      >
        <FeatureItem
          imgSrc="/ic_make_brand.svg"
          title="Mobile Development"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex ipsum!"
        />
        <FeatureItem
          imgSrc="/ic_development.svg"
          title="Web Development"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex ipsum!"
          boxShadow="rgba(145, 158, 171, 0.16) 0px 24px 48px 0px"
        />
        <FeatureItem
          imgSrc="/ic_design.svg"
          title="UI/UX Design"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex ipsum!"
        />
      </Stack>
    </Section>
  );
};

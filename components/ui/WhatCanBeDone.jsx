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
          description="Build innovative, high-quality mobile apps using cutting-edge React Native technology."
        />
        <FeatureItem
          imgSrc="/ic_development.svg"
          title="Web Development"
          description="Crafting responsive and functional websites tailored to various business and personal needs, ensuring optimal user experience across devices and browsers."
          boxShadow="rgba(145, 158, 171, 0.16) 0px 24px 48px 0px"
        />
        <FeatureItem
          imgSrc="/ic_design.svg"
          title="Backend Development"
          description="Designing and implementing scalable and secure backend architectures to support web and mobile application functionalities effectively."
        />
      </Stack>
    </Section>
  );
};

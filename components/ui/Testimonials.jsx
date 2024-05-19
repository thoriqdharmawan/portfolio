import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { TESTIMONIALS_DATA, testimonialCarousel } from "@/constant/global";

import Section from "../shared/Section";
import TestimonialItem from "../shared/TestimonialItem";

export default () => {
  return (
    <Section bgcolor="#f1f1f1" withContainer={false}>
      <Typography variant="h2" align="center" fontWeight="bold" mb={8}>
        Testimonials
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Swiper {...testimonialCarousel}>
          {TESTIMONIALS_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              {item.map(({ image, text, name }, _index) => (
                <TestimonialItem
                  image={image}
                  text={text}
                  name={name}
                  key={_index}
                />
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Section>
  );
};

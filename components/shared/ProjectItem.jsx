"use client";

import { Box, Button, Paper, Tooltip, Typography } from "@mui/material";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import Image from "next/image";

export default ({
  name,
  description,
  role,
  technologies,
  thumbnails,
  url,
  urlLabel,
  slug,
}) => {
  return (
    <Paper elevation={0} sx={styles.content}>
      <Box>
        <Box sx={styles.thumbnails}>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            speed={1000}
            pagination={{ dynamicBullets: true }}
          >
            {thumbnails?.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={330}
                  height={330}
                  src={item || "/thumbnail.svg"}
                  alt="thumbnail"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box my={2}>
          <Typography variant="h5" component="h4" mb={2} fontWeight="600">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          ></Typography>
        </Box>

        <Box mb={2}>
          <Typography variant="subtitle2" fontWeight="600">
            Role
          </Typography>
          <Typography variant="subtitle1" component="p">
            {role}
          </Typography>
        </Box>
        {url && (
          <Box mb={2}>
            <Typography variant="subtitle2" fontWeight="600">
              Url
            </Typography>
            <Typography
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              variant="subtitle1"
            >
              {urlLabel || url}
            </Typography>
          </Box>
        )}
        <Box mb={2}>
          <Typography variant="subtitle2" fontWeight="600">
            Technologies
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 1 }}>
            {technologies.map((res, idx) => (
              <Tooltip key={idx} title={res.name}>
                <Image src={res.src} alt="tech-icon" width={24} height={24} />
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button variant="text" component={Link} href={`/projects/${slug}`}>
          See More
        </Button>
      </Box>
    </Paper>
  );
};

const styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 2,
    borderRadius: 4,
    height: "100%",
  },
  thumbnails: {
    borderRadius: "5px",
    overflow: "hidden",
    "& img": { width: "100%", height: "auto" },
    "& .swiper-wrapper": { height: "330px" },
  },
  description: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: "4",
    WebkitBoxOrient: "vertical",
  },
};

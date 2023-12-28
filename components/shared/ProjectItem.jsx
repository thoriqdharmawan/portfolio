"use client";

import { Box, Button, Paper, Tooltip, Typography } from "@mui/material";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `&quot;data:image/svg+xml,%3Csvg xmlns=&#x27;http://www.w3.org/2000/svg&#x27; width=&#x27;400&#x27; height=&#x27;400&#x27; viewBox=&#x27;0 0 400 400&#x27;%3E%3Cfilter id=&#x27;blur&#x27; filterUnits=&#x27;userSpaceOnUse&#x27; color-interpolation-filters=&#x27;sRGB&#x27;%3E%3CfeGaussianBlur stdDeviation=&#x27;20&#x27; edgeMode=&#x27;duplicate&#x27; /%3E%3CfeComponentTransfer%3E%3CfeFuncA type=&#x27;discrete&#x27; tableValues=&#x27;1 1&#x27; /%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Cimage filter=&#x27;url(%23blur)&#x27; href=&#x27;data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlT/wAALCAAKAAoBAREA/8QAMwABAQEAAAAAAAAAAAAAAAAAAAcJEAABAwUAAwAAAAAAAAAAAAAFAAYRAQMEEyEVMlH/2gAIAQEAAD8Az1bLPaxhiuk0QdeCOLDtHixN2dmd2bsc5FPX7VTREX//2Q==&#x27; x=&#x27;0&#x27; y=&#x27;0&#x27; height=&#x27;100%25&#x27; width=&#x27;100%25&#x27;/%3E%3C/svg%3E&quot;`;
};

export default ({
  name,
  description,
  role,
  technologies,
  thumbnails,
  url,
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
          <Typography variant="subtitle1" component="p" sx={styles.description}>
            {description}
          </Typography>
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
              {url}
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
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": "4",
  },
};

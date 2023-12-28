"use client"

import { Box, Paper, Tooltip, Typography, Button } from "@mui/material";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PROJECTS } from "@/constant/global";
import { formatDate } from "@/helpers";
import { IndeterminateCheckBoxRounded } from "@mui/icons-material";

import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Section from "@/components/shared/Section";

export default function Page({ params }) {
  const detailData = PROJECTS.find((project => project.slug === params.slug))

  if (!detailData) {
    return (
      <Section boxShadow="none">
        <Box sx={styles.emptyContainer}>
          <Typography textAlign="center" variant="h6" component="h6" fontWeight="600">
            Data Tidak Ditemukan
          </Typography>
          <Box sx={styles.emptyContainer}>
            <Button
              component="a"
              sx={{ mt: 3 }}
              startIcon={<ArrowBackIcon />}
              href="/"
            >
              Back to Home
            </Button>
          </Box>
        </Box>
      </Section>
    )
  }

  return (
    <Section boxShadow="none" py={2}>
      <Paper elevation={0} sx={styles.content}>
        <Box>
          <Box sx={styles.thumbnails}>
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              speed={1000}
              pagination={{ dynamicBullets: true }}
            >
              {detailData?.thumbnails?.map((item, index) => (
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
            <Typography variant="h5" component="h4" fontWeight="600">
              {detailData?.name}
            </Typography>
            {detailData?.createdAt && (
              <Typography variant="span" component="p" mb={2} fontWeight="400">
                Created at {formatDate(detailData?.createdAt)}
              </Typography>
            )}
            <Typography variant="subtitle1" component="p">
              {detailData?.description}
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography variant="subtitle2" fontWeight="600">
              Role
            </Typography>
            <Typography variant="subtitle1" component="p">
              {detailData?.role}
            </Typography>
          </Box>
          {detailData?.url && (
            <Box mb={2}>
              <Typography variant="subtitle2" fontWeight="600">
                Url
              </Typography>
              <Typography
                component="a"
                href={detailData?.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtitle1"
              >
                {detailData?.url}
              </Typography>
            </Box>
          )}
          {detailData?.responsibility && (
            <Box mb={2}>
              <Typography variant="subtitle2" fontWeight="600">
                Responsibility
              </Typography>
              <ul>
                {detailData?.responsibility?.map((res, idx) => (
                  <li key={IndeterminateCheckBoxRounded}>{res}</li>
                ))}
              </ul>
            </Box>
          )}
          <Box mb={2}>
            <Typography variant="subtitle2" fontWeight="600">
              Technologies
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 1 }}>
              {detailData?.technologies.map((res, idx) => (
                <Tooltip key={idx} title={res.name}>
                  <Image src={res.src} alt="tech-icon" width={24} height={24} />
                </Tooltip>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Section>
  )
}

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
  emptyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

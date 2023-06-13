import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default ({ image, text, name }) => {
  return (
    <Box sx={styles.testimonialsCard}>
      <Typography component="p" sx={styles.title}>
        {text}
      </Typography>
      <Box sx={styles.testimonialsInfo}>
        {image && (
          <Box sx={styles.testimonialsImage}>
            <Image width={42} height={42} src={image} alt={name} />
          </Box>
        )}
        <Typography sx={styles.contentName} color="primary" component="h3">
          {name}
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
  testimonialsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "5px",
    mb: "20px",
    px: "35px",
    py: "25px",
    pb: "35px",
  },
  title: {
    fontSize: "16px",
    lineHeight: 1.87,
    color: "#343D48",
  },
  testimonialsInfo: {
    display: "flex",
    alignItems: "center",
    mt: "20px",
  },
  testimonialsImage: {
    "& img": {
      display: "block",
      mr: "15px",
      borderRadius: "50%",
    },
  },
  contentName: {
    m: 0,
    fontWeight: 600,
  },
};

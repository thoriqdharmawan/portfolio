import { Box } from "@mui/material";
import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
  size: {
    small: number;
    large: number;
  };
}

export default function ImageSwithcer(props: Props) {
  const { size, src, alt } = props;
  return (
    <>
      <Box sx={styles.container}>
        <Image width={size.large} height={size.large} src={src} alt={alt} />
      </Box>
      <Box sx={styles.containerLg}>
        <Image width={size.small} height={size.small} src={src} alt={alt} />
      </Box>
    </>
  );
}

const styles = {
  container: (theme) => ({
    borderRadius: 8,
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  }),
  containerLg: (theme) => ({
    borderRadius: 8,
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  }),
};

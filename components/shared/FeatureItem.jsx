import { Paper, Typography } from "@mui/material";
import Image from "next/image";

export default ({ imgSrc, title, description, boxShadow }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 8,
        width: "340px",
        boxShadow: boxShadow || "none",
        borderRadius: "18px",
        textAlign: "center",
      }}
    >
      <Image src={imgSrc} width={48} height={48} alt="feature" />
      <Typography variant="h5" mt={5} mb={3} fontWeight="600">
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Paper>
  );
};

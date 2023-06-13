import { Box, Button, Typography } from "@mui/material";

export default ({ title, description, url }) => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 340,
        boxSizing: 'border-box',
        "&:hover": {
          border: "1px solid #fff",
        },
      }}
    >
      <Box>
        <Typography
          component="h4"
          mb={2}
          sx={{ color: "#ccc", fontWeight: "600", fontSize: 21 }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: "#ccc" }}>{description}</Typography>
      </Box>
      <Button
        fullWidth={false}
        component="a"
        target="_blank"
        href={url}
        rel="noopener noreferrer"
        sx={{
          color: "#ccc",
          userSelect: "none",
          marginTop: 3,
          marginLeft: "auto",
        }}
      >
        See More
      </Button>
    </Box>
  );
};

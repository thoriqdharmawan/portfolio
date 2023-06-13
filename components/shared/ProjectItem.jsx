import { Box, Button, Paper, Tooltip, Typography } from "@mui/material";
import Image from "next/image";

export default ({ src, name, description, role, technologies }) => {
  return (
    <Paper elevation={0} sx={{ padding: 2, borderRadius: 4 }}>
      <Box
        sx={{ "& img": { width: "100%", height: "auto", borderRadius: "5px" } }}
      >
        <Image width={330} height={330} src={src || "/thumbnail.svg"} alt={name} />
      </Box>
      <Box my={2}>
        <Typography variant="h5" component="h4" mb={2} fontWeight="600">
          {name}
        </Typography>
        <Typography variant="subtitle1" component="p">
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

      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button variant="text">See More</Button>
      </Box>
    </Paper>
  );
};

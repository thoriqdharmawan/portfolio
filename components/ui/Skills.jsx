import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Section from "../shared/Section";
import SkillsPack from "../shared/SkillsPack";
import BubbleSkills from "../shared/BubbleSkils";

export default () => {
  return (
    <Section py={2}>
      <h1>Skill start</h1>
      {/* <SkillsPack /> */}
      <BubbleSkills />

      <h1>Skill end</h1>
    </Section>
  );
};
// export default () => {
//   return (
//     <Section>
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <SkillsPack />
//         </Grid>
//         <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
//           <Box>
//             <Typography variant="h2" fontWeight="bold" mb={2}>
//               Huge pack of Skills
//             </Typography>

//             <Button component={Link} href="/skills" variant="contained">
//               Show All Skills
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Section>
//   );
// };

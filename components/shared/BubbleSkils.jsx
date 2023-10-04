// import { Box, Paper, Tooltip, Typography } from "@mui/material";
// // import BubbleUI from "react-bubble-ui";

// import { SKILLS } from "@/constant/global";

// // import "react-bubble-ui/dist/index.css";
// import "./bubble.css";

// const Child = ({ name, src, bgColor }) => {
//   return (
//     <Box
//       sx={{
//         ...styles.bubble,
//         backgroundColor: bgColor,
//       }}
//       className="bubbleUI-childComponent"
//     >
//       <Paper elevation={0} sx={styles.skillIcon}>
//         <img src={src} width={50} height={50} alt={name} />
//       </Paper>
//       <Typography sx={styles.bubbleName}>{name}</Typography>
//     </Box>
//   );
// };

// const options = {
//   size: 152,
//   minSize: 14,
//   gutter: 7,
//   provideProps: true,
//   numCols: 3,
//   fringeWidth: 120,
//   yRadius: 103,
//   xRadius: 150,
//   cornerRadius: 0,
//   showGuides: false,
//   compact: true,
//   gravitation: 0,
// };

// const BubbleSkills = () => {
//   const children = SKILLS.slice(0, 10)?.map((data, idx) => (
//     <Child key={idx} name={data?.name} src={data.src} bgColor={data.bgColor} />
//   ));

//   return (
//     <Box sx={{ height: "400px", width: "100%" }}>
//       <BubbleUI options={options} className="bubbleUI-root">
//         {children}
//       </BubbleUI>
//     </Box>
//   );
// };

// export default BubbleSkills;

// const styles = {
//   skillIcon: {
//     backgroundColor: "unset",
//     width: "fit-content",
//     padding: "8px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: "8px",
//     position: "relative",
//     "&:hover": {
//       boxShadow: "rgba(145, 158, 171, 0.16) 0px 24px 48px 0px",
//     },
//   },
//   bubble: {
//     borderRadius: "50%",
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   bubbleName: {
//     color: "#fff",
//     fontWeight: "600",
//     mt: "8px",
//   },
// };

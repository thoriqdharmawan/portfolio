import { Box, Paper, Tooltip } from "@mui/material";
import Image from "next/image";

const SkillIcon = ({ src, name }) => {
  return (
    <Tooltip title={name}>
      <Paper
        elevation={0}
        sx={{
          width: "fit-content",
          padding: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          position: "relative",
          "&:hover": {
            boxShadow: "rgba(145, 158, 171, 0.16) 0px 24px 48px 0px",
          },
        }}
      >
        <Image src={src} width={50} height={50} alt={name} />
      </Paper>
    </Tooltip>
  );
};

export default () => {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "#fcfcfc",
        display: "flex",
        flexDirectioin: "row",
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      <SkillIcon src="/ic_skill_react.svg" name="ReactJs" favorite />
      <SkillIcon src="/ic_skill_js.svg" name="Javscript" />
      <SkillIcon src="/ic_skill_ts.svg" name="Typescript" />
      <SkillIcon src="/ic_skill_next.svg" name="NextJs" favorite />
      <SkillIcon src="/ic_skill_redux.svg" name="Redux" />
      <SkillIcon src="/ic_skill_vite.svg" name="Vite" />
      <SkillIcon src="/ic_skill_mui.svg" name="MaterialUI" />
      <SkillIcon src="/ic_skill_antd.svg" name="AntDesign" />
      <SkillIcon src="/ic_skill_tailwind.svg" name="Tailwind" />
      <SkillIcon src="/ic_skill_styledcomponent.svg" name="StyledComponent" />
      <SkillIcon src="/ic_skill_react-router.svg" name="React Router" />
      <SkillIcon src="/ic_skill_hasura.svg" name="Hasura" />
      <SkillIcon src="/ic_skill_graphql.svg" name="Graphql" />
      <SkillIcon src="/ic_skill_formik.svg" name="Formik" />
      <SkillIcon src="/ic_skill_react-hook-form.svg" name="React Hook Form" />
      <SkillIcon src="/ic_skill_express.svg" name="Express.js" />
      <SkillIcon src="/ic_skill_figma.svg" name="Figma" />
      <SkillIcon src="/ic_skill_sql.svg" name="SQL" />
    </Box>
  );
};

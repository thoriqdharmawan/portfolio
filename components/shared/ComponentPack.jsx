import { Box, Button, Pagination, Tab, Tabs } from "@mui/material";
import { useState } from "react";

export default () => {
  const [tab, setTab] = useState(0);

  const handleChangeTab = (e, value) => {
    e.preventDefault();
    setTab(value);
  };

  return (
    <Box>
      <Button variant="contained" color="primary">
        Add To Cart
      </Button>

      <Tabs value={tab} onChange={handleChangeTab} aria-label="tab example">
        <Tab label="React" />
        <Tab label="Vue" />
        <Tab label="Angular" />
      </Tabs>

      <Pagination count={10} color="primary" />
    </Box>
  );
};

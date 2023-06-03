import {
  Box,
  Button,
  IconButton,
  Pagination,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";
import { useState } from "react";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SearchIcon from "@mui/icons-material/Search";

export default () => {
  const [tab, setTab] = useState(0);

  const handleChangeTab = (e, value) => {
    e.preventDefault();
    setTab(value);
  };

  return (
    <Box>
      <Stack flexDirection="row" justifyContent="center" gap={2}>
        <Button
          startIcon={<AddShoppingCartIcon />}
          variant="contained"
          color="primary"
        >
          Add To Cart
        </Button>
        <Button startIcon={<CloudUploadIcon />} variant="outlined">
          Upload
        </Button>

        <IconButton aria-label="search">
          <SearchIcon />
        </IconButton>
      </Stack>

      <Tabs value={tab} onChange={handleChangeTab} aria-label="tab example">
        <Tab label="React" />
        <Tab label="Vue" />
        <Tab label="Angular" />
      </Tabs>

      <Pagination count={10} color="primary" />
    </Box>
  );
};

import React from "react";

import { AppBar, Toolbar, Button } from "@mui/material";

const NavBar = () => {
  return (
    <div>
      <AppBar
        position="static"
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        <Toolbar sx={{ gap: "10px" }}>
          <Button variant="outlined" color="info">
            Add Products
          </Button>
          <Button variant="outlined" color="secondary">
            Add Category
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

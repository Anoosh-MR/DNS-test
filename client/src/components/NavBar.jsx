import React from "react";

import { AppBar, Toolbar, Button } from "@mui/material";
import AddCategoryModel from "./AddCategoryModel";
import AddProductModel from "./AddProductModel";

const NavBar = () => {
  return (
    <div>
      <AppBar
        position="static"
        sx={{ display: "flex", alignItems: "flex-end" }}
      >
        <Toolbar sx={{ gap: "10px" }}>
          <AddProductModel />
          <AddCategoryModel />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

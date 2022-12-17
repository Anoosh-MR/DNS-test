import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

const SubCategories = () => {
  const [product, setProduct] = useState();
  const location = useLocation();
  const { state } = location;
  console.log(product);

  const getProducts = () => {
    axios
      .post("http://localhost:5000/api/products/getPost", {
        catId: state.id,
      })
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleClick = () => {};

  return (
    <Box>
      <NavBar />
      <Box>
        <Typography
          variant="h6"
          color="error"
          sx={{ marginLeft: "5px", padding: "20px 20px 0px " }}
        >
          {state.name}
        </Typography>
        <Grid container gap="20px" sx={{ padding: "20px", flexWrap: "wrap" }}>
          {state?.data.map((cat) => (
            <Button
              key={cat.name}
              size="small"
              variant="outlined"
              onClick={() => handleClick(cat.children, cat.name)}
            >
              {cat.name}
            </Button>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SubCategories;

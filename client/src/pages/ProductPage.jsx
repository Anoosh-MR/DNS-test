import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { CategorynammeCount, CategoryProducts } from "../helper/helper";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const location = useLocation();
  const { name, products } = location.state;
  return (
    <Box>
      <Typography
        variant="h6"
        color="error"
        sx={{ marginLeft: "5px", padding: "20px 20px 0px " }}
      >
        {CategorynammeCount(name, products)}
      </Typography>
      {products ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "20px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {CategoryProducts(name, products).map((prod) => (
            <ProductCard key={prod._id} prod={prod} />
          ))}
        </Box>
      ) : null}
    </Box>
  );
};

export default ProductPage;

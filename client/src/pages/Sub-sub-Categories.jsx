import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import { CategorynammeCount, CategoryProducts } from "../helper/helper";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const SubsubCategories = () => {
  const location = useLocation();
  const { id, data, name, products } = location.state;
  const navigator = useNavigate();

  const handleClick = (data, id, name) => {
    navigator("/categories/subCategory/products", {
      state: { id, data, name, products },
    });
  };
  return (
    <Box>
      <Box>
        <Typography
          variant="h6"
          color="error"
          sx={{ marginLeft: "5px", padding: "20px 20px 0px " }}
        >
          {CategorynammeCount(name, products)}
        </Typography>
        <Grid container gap="20px" sx={{ padding: "20px", flexWrap: "wrap" }}>
          {data?.map((cat) => (
            <Button
              key={cat.name}
              size="small"
              variant="outlined"
              onClick={() => handleClick(cat.children, cat._id, cat.name)}
            >
              {CategorynammeCount(cat.name, products)}
            </Button>
          ))}
        </Grid>
      </Box>
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
    </Box>
  );
};

export default SubsubCategories;

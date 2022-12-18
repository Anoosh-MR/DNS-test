import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";
import { CategorynammeCount, CategoryProducts, styled } from "../helper/helper";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

const SubCategories = () => {
  const [newProduct, setNewProduct] = useState();
  const location = useLocation();
  const navigator = useNavigate();
  const { id, data, name, products } = location.state;

  const handleClick = (data, id, name) => {
    navigator("/categories/subCategory", {
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
              sx={{ display: styled(cat.name, products) }}
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
          marginTop: "20px",
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

export default SubCategories;

import React from "react";
import axios from "axios";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { CategorynammeCount, styled } from "../helper/helper";
import { ShopState } from "../context/contextAPI";

const Home = () => {
  const [mainCategory, setCategory] = useState();
  const [products, setProducts] = useState();
  const navigator = useNavigate();
  const { fetchAgain, setfetchAgain } = ShopState();

  useEffect(() => {
    fetchCategories();
    fullProducts();
  }, [fetchAgain]);

  // frtching categories
  const fetchCategories = () => {
    axios
      .get("/api/category")
      .then(({ data }) => setCategory(data))
      .catch((err) => console.log(err));
  };
  const fullProducts = () => {
    axios.post("/api/products/getPost").then(({ data }) => setProducts(data));
  };

  const handleClick = (data, id, name) => {
    navigator("/categories", { state: { id, data, name, products } });
  };

  return (
    <>
      {products && mainCategory ? (
        <>
          <Box>
            <Typography
              variant="h6"
              color="error"
              sx={{ marginLeft: "5px", padding: "20px 20px 0px " }}
            >
              {`Category (${products?.length})`}
            </Typography>
            <Grid
              container
              gap="20px"
              sx={{ padding: "20px", flexWrap: "wrap" }}
            >
              {mainCategory.map((cat) => (
                <Button
                  key={cat.name}
                  sx={{ display: styled(cat.name, products) }}
                  size="small"
                  variant="outlined"
                  onClick={() => handleClick(cat.children, cat._id, cat.name)}
                >
                  {CategorynammeCount(cat.name, products)}
                </Button>
              ))}
            </Grid>
          </Box>
          <Typography
            variant="h6"
            color="error"
            sx={{ marginLeft: "5px", padding: "20px 20px 0px " }}
          >
            Products
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "20px",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {products.map((prod) => (
              <ProductCard key={prod._id} prod={prod} />
            ))}
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "250px",
          }}
        >
          <CircularProgress sx={{ width: "300px", height: "300px" }} />
        </Box>
      )}
    </>
  );
};

export default Home;

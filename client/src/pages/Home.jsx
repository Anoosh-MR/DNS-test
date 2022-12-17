import React from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [mainCategory, setCategory] = useState();
  const [products, setProducts] = useState();
  const navigator = useNavigate();

  // frtching categories
  const fetchCategories = () => {
    axios
      .get("http://localhost:5000/api/category")
      .then(({ data }) => setCategory(data))
      .catch((err) => console.log(err));
  };
  const fullProducts = () => {
    axios
      .post("http://localhost:5000/api/products/getPost")
      .then(({ data }) => setProducts(data));
  };

  useEffect(() => {
    fetchCategories();
    fullProducts();
  }, []);

  const handleClick = (data, id, name) => {
    navigator("/categories", { state: { id, data, name } });
  };
  return (
    <div>
      <NavBar />
      <Box>
        <Typography
          variant="h6"
          color="error"
          sx={{ marginLeft: "5px", padding: "20px 20px 0px " }}
        >
          Categories
        </Typography>
        <Grid container gap="20px" sx={{ padding: "20px", flexWrap: "wrap" }}>
          {mainCategory?.map((cat) => (
            <Button
              key={cat.name}
              size="small"
              variant="outlined"
              onClick={() => handleClick(cat.children, cat._id, cat.name)}
            >
              {cat.name}
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
        {products?.map((prod) => (
          <ProductCard key={prod._id} prod={prod} />
        ))}
      </Box>
    </div>
  );
};

export default Home;

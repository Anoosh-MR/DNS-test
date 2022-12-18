import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ProductCard = ({ prod }) => {
  return (
    <>
      <Card sx={{ width: "200px", height: "320px" }}>
        <CardMedia
          sx={{ objectFit: "contain", height: "150px" }}
          component="img"
          src={prod.picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            {prod.name.slice(15)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prod.desc.length > 20 ? prod.desc.substring(0, 20) : prod.desc}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {`${prod.price}Rs`}
          </Typography>
          <CardActions>
            <Button size="small" variant="contained" color="secondary">
              cart
            </Button>
            <Button size="small" variant="contained" color="info">
              Buy
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;

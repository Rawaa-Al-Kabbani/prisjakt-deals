import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { FunctionComponent } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Product } from "../api";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    maxWidth: "70%",
    maxHeight: "100%",
  },
  content: {
    marginBottom: "1em",
  },
  image: {
    height: "50%",
    maxHeight: 300,
    width: "100%",
  },
});

type ProductDetailsState = {
  product: Product;
};

const ProductDetails: FunctionComponent<RouteComponentProps> = (props) => {
  const { product } = props.history.location.state as ProductDetailsState;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img
          alt="product image"
          src={product.product.media.product_images.first["280"]}
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Category:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            {product.product.category.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Discount:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            {product.price.diff_percentage}%
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Previous Price:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            {product.price.display.previousPrice}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Current Price:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.content}
          >
            {product.price.display.offer}
          </Typography>
        </CardContent>
      </CardActionArea>
      <br />
    </Card>
  );
};

export default withRouter(ProductDetails);

import React from "react";
import ProductsItem from "./ProductsItem";
import classes from "./Product.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Items from "../Shared/Items";
import responsive from "../Shared/responsive";

function ProductsList() {
  return (
    <Carousel containerClass={classes.ProductsList} responsive={responsive}>
      {Items.map((item) => (
        <ProductsItem item={item} key={item.id} />
      ))}
    </Carousel>
  );
}

export default ProductsList;

// <Box
//   borderWidth="1px"
//   className={classes.ProductsList}
//   rounded="25"
//   dropShadow="lg"
//   mt="2rem"
// ></Box>;

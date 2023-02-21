import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useGetAllProductsQuery } from "../productsApi";
import { ProductCard } from "./ProductCard";
import { SearchBar } from "../../SearchBar/SearchBar";

export function ProductList() {
  const { data } = useGetAllProductsQuery();

  return (
    <Grid container justifyContent="center">
      <Grid xs={12}>
        <SearchBar />
      </Grid>
      {data.map((mobile) => {
        return (
          <Grid
            xs={12}
            md={4}
            lg={3}
            direction="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
            mb={2}
            key={mobile.id}
          >
            <ProductCard
              id={mobile.id}
              model={mobile.model}
              img={mobile.imgUrl}
              brand={mobile.brand}
              price={mobile.price}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ProductList;

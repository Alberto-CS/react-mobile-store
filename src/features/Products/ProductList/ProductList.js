import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { useGetAllProductsQuery } from "../productsApi";
import { ProductCard } from "./ProductCard";
import { SearchBar } from "../../SearchBar/SearchBar";
import { useSelector } from "react-redux";

export function ProductList() {
  const { data } = useGetAllProductsQuery();
  const filter = useSelector((state) => state.searchBar.searchFilter);

  return (
    <Grid container justifyContent="center">
      <Grid xs={12}>
        <SearchBar />
      </Grid>
      {data
        .filter((mobile) => {
          if (
            mobile.brand.includes(filter) ||
            mobile.model.includes(filter) ||
            filter === ""
          ) {
            return mobile;
          } else {
            return null;
          }
        })
        .map((mobile) => {
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

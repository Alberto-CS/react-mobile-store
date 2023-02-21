import React from "react";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function ShoppingCart() {
  const cart = useSelector((state) => state.shoppingCart.count);

  return (
    <Badge badgeContent={cart} color="secondary" showZero>
      <ShoppingCartIcon color="white" />
    </Badge>
  );
}

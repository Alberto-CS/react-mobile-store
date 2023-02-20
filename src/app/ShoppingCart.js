import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ShoppingCart() {

  return (
    <Badge badgeContent={4} color="primary">
      <ShoppingCartIcon color="action" />
    </Badge>
  );
}

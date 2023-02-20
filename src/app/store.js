import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/Products/productsApi";
import shoppingCartReducer from "../features/ShoppingCart/ShoppingCartSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    shoppingCart: shoppingCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

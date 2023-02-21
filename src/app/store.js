import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/Products/productsApi";
import shoppingCartReducer from "../features/ShoppingCart/ShoppingCartSlice";
import searchBarReducer from "../features/SearchBar/SearchBarSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    shoppingCart: shoppingCartReducer,
    searchBar: searchBarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

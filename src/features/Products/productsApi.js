import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://itx-frontend-test.onrender.com/api/"}),
  keepUnusedDataFor: 3600,
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `product`,
    }),
    getProductDetailsById: builder.query({
      query: (id) => `product/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
export const { useGetProductDetailsByIdQuery } = productsApi;

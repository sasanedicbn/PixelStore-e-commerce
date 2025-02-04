import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `products?category=${category}`,
    }),
    getProductById: builder.query<Product, string>({
        query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsByCategoryQuery, useGetProductByIdQuery } = productsApi;
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
    registerUser: builder.mutation({
      query: (formData) => ({
        url:'api/users',
        method:"POST",
        body: formData,
      })
    }),
    loginUser: builder.mutation({
      query: (formData) => ({
        url:'api/users/login',
        method:"POST",
        body:formData,
      })
    }),
    getUser: builder.
     getProductsBySearchBar: builder.query({
      query: (searchTerm) => `api/products/search?query=${searchTerm}`
    }),
  }),
});

export const { useGetProductsByCategoryQuery, useGetProductByIdQuery, useRegisterUserMutation, useLoginUserMutation, useGetProductsBySearchBarQuery, useGetUserQuery, useGetUserFavouritesQuery} = productsApi;
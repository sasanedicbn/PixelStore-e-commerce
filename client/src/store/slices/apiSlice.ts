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
    getUserFavourites: builder.mutation({
     query: (userId: string) => ({
      url: `api/users/favourites`,
      method: "POST",
      body: { userId },
    }),
   }),
   getUserCart: builder.mutation({
      query: (userId:string) => ({
      url : `api/users/cart`,
      method: "POST",
      body: { userId },
      }) 
    }),
    getUser: builder.query({
     query: () => `api/users/me`
    }),
     getProductsBySearchBar: builder.query({
      query: (searchTerm) => `api/products/search?query=${searchTerm}`
    }),
  }),
});

export const { useGetProductsByCategoryQuery, useGetProductByIdQuery, useRegisterUserMutation, useLoginUserMutation, useGetProductsBySearchBarQuery, useGetUserQuery, useGetUserFavouritesMutation, useGetUserCartMutation} = productsApi;
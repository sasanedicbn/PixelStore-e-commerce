import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:8000", 
    credentials: "include" 
  }),
  endpoints: (builder) => ({
    // getProductsByCategory: builder.query<Product[], string>({
    //   query: (category) => `products?category=${category}`,
    // }),
    // getProductById: builder.query<Product, string>({
    //   query: (id) => `products/${id}`,
    // }),
    // getProductsBySearchBar: builder.query<Product[], string>({
    //   query: (searchTerm) => `api/products/search?query=${searchTerm}`,
    // }),
    registerUser: builder.mutation({
      query: (formData) => ({
        url: "api/users",
        method: "POST",
        body: formData,
      }),
    }),
    loginUser: builder.mutation({
      query: (formData) => ({
        url: "api/users/login",
        method: "POST",
        body: formData,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "api/users/logout",
        method: "POST",
      }),
    }),
    getUser: builder.query({
      query: () => `api/users/me`,
    }),

    getUserFavourites: builder.query({
      query: () => `api/users/favourites`,
    }),
    getUserCart: builder.query({
      query: () => `api/users/cart`,
    }),

  }),
});

export const { 
  // useGetProductsByCategoryQuery, 
  // useGetProductByIdQuery, 
  // useGetProductsBySearchBarQuery,
  useRegisterUserMutation, 
  useLoginUserMutation, 
  useGetUserQuery, 
  useGetUserFavouritesQuery, 
  useGetUserCartQuery 
} = productsApi;

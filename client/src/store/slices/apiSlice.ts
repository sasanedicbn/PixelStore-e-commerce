import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:8000", 
    credentials: "include" 
  }),
  tagTypes: ["Cart"], 
  endpoints: (builder) => ({
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `products?category=${category}`,
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
    getProductsBySearchBar: builder.query<Product[], string>({
      query: (searchTerm) => `api/products/search?query=${searchTerm}`,
    }),
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
    sendProductToCart: builder.mutation({
      query: (productId) => ({
        url: `api/users/cart/add`,
        method: "POST",
        body: { productId },
      }),
       invalidatesTags: ["Cart"],
    }),
    getUser: builder.query({
      query: () => `api/users/me`,
    }),
    updateCart: builder.mutation({
      query: ({ productId, type}) => ({
        url: `api/users/cart/${productId}`,
        method: "PATCH",
        body: { type },
        credentials: "include"
      }),
      invalidatesTags: ["Cart"],
    }),
    getUserFavourites: builder.query({
      query: () => `api/users/favourites`,
    }),
    getUserCart: builder.query({
      query: () => `api/users/cart`,
      providesTags: ["Cart"], 
    }),
    sendItemtoFavourites: builder.mutation({
      query: (productId) => ({
        url: `api/users/favourites/add`,
        method: "POST",
        body: { productId },
      }),
      providesTags: ["Cart"],
    }),
  }),
});

export const { 
  useGetProductsByCategoryQuery, 
  useGetProductByIdQuery, 
  useGetProductsBySearchBarQuery,
  useRegisterUserMutation, 
  useSendProductToCartMutation,
  useLoginUserMutation, 
  useLogoutUserMutation,
  useGetUserQuery, 
  useGetUserFavouritesQuery, 
  useGetUserCartQuery,
  useUpdateCartMutation,
  useSendItemtoFavouritesMutation,
} = productsApi;

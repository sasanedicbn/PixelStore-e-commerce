import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productsApi = createApi({
reducerPath: 'productsApi',
baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000"}),
endpoints:(builder) => ({
    getProductsByCategory: builder.query({
        query: (category) => `products?category=${category}`,
})
})
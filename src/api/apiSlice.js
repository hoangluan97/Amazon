import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  //add cache in state.api
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.rainforestapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () =>
        "/request?api_key=AFCE728547BB4C1589EA21B8D13E10B9&type=product&amazon_domain=amazon.com&asin=B073JYC4XM",
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;

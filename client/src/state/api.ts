// we use redux toolkit to access the data globally and we can grab to make api calls and store data globally 
// KPI - key performance indicators

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types"; // we are importing objects from types.js

export const api = createApi({       // we can grab data from backend
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),      // environment variable like port no. from .env file
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],    // where information is kept
  endpoints: (build) => ({   // where api calls are made
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "/api",
    prepareHeaders: (headers) => {
      try {
        const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
      } catch {
        // ignore storage errors (SSR or blocked storage)
      }
      return headers;
    },
  }),
  tagTypes: ["Auth", "User"],
  endpoints: () => ({}),
});

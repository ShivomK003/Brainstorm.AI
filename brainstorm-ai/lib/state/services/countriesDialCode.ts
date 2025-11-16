import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dotenv from "dotenv";

type CountryApiResponse = {
  success: number;
  data: {
    callingCode: string;
    code: string;
    name: string;
  }[];
};

export const countriesDialCodeApi = createApi({
  reducerPath: "countriesDialCodeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apihut.in/api",
    prepareHeaders: (headers) => {
      headers.set("X-Avatar-Key", process.env.NEXT_PUBLIC_COUNTRIES_DIALCODE_API_KEY ?? "");
      if (!process.env.NEXT_PUBLIC_COUNTRIES_DIALCODE_API_KEY) {
        throw new Error("NEXT_PUBLIC_COUNTRIES_DIALCODE_API_KEY is not set");
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCountriesDialCode: builder.query<CountryApiResponse, any>({
      query: ({ name }: { name: string }) => `${"/country/phone-codes" + (name !== "" ? `?name=${name}` : "")}`,
    }),
  }),
});

export const { useGetCountriesDialCodeQuery } = countriesDialCodeApi;

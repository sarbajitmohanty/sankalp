import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  reducerPath: "adminApi",
  tagTypes: ["User", "UserSearch"],
  endpoints: (build) => ({
    getStudent: build.query({
      query: (roll) => `api/students/${roll}`,
      providesTags: ["User"],
    }),
    getStudentBySearch: build.query({
      query: ({ name, batch }) => ({
        url: "api/students/search",
        method: "GET",
        params: { name, batch },
      }),
      providesTags: ["UserSearch"],
    }),
  }),
});

export const { useGetStudentQuery, useGetStudentBySearchQuery } = api;

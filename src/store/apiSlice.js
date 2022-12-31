import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setCredential, logOut } from "./authSlice";
import { getTokenCookie, getAuthHeader } from "utils/tools";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "/api",
//   }),

//   endpoints: (builder) => ({
//     signup: builder.mutation({
//       query: (init) => ({
//         url: "/users/signup",
//         method: "POST",
//         body: init,
//       }),
//     }),
//     signin: builder.mutation({
// query: (init) => ({
//   url: "/users/signin",
//   method: "POST",
//   body: init,
// }),
//     }),
//     getProducts: builder.query({
//       query: (init) => ({
//         url: "/products",
//         method: "GET",
//         params: {
//           limit: init.limit,
//           sort: init.sort,
//         },
//       }),
//     }),
// getAuth: builder.query({
//   query: () => ({
//     url: "/users/isauth",
//     method: "GET",
//     // getAuthHeader,
//   }),
// }),
//   }),
// });

// export const {
//   useGetProductsQuery,
//   useSignupMutation,
//   useSigninMutation,
//   useGetAuthQuery,
// } = apiSlice;

const baseQuery = fetchBaseQuery({
  baseUrl: "/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    // const token = getState().auth.token;
    const token = getTokenCookie();

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (init) => ({
        url: "/users/login",
        method: "POST",
        body: init,
      }),
    }),
    getTours: builder.query({
      query: () => ({
        url: "/tours",
        method: "GET",
      }),
    }),
    getTour: builder.query({
      query: (id) => ({
        url: `/tours/${id}`,
        method: "GET",
      }),
    }),

    getAuth: builder.query({
      query: () => ({
        url: "/users/isauth",
        method: "GET",
        // getAuthHeader,
      }),
    }),
    logOut: builder.query({
      query: () => ({
        url: "/users/logout",
        method: "GET",
        // getAuthHeader,
      }),
    }),
    updateProfile: builder.mutation({
      query: (init) => ({
        url: "/users/updateMe",
        method: "PATCH",
        body: init,
        // getAuthHeader,
      }),
    }),
  }),
});

export const {
  useGetToursQuery,
  useGetTourQuery,
  useLoginMutation,
  useGetAuthQuery,
  useUpdateProfileMutation,
} = apiSlice;

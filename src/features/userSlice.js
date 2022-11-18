// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseURI = 'http://localhost:8000/api/v1/users';

// export const userSlice = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
//   tagTypes: ['User'],
//   endpoints: (builder) => ({
//     // get all books
//     getUsers: builder.query({
//       // get: 'http://localhost:8000/api/v1/books'
//       query: () => '/',
//       providesTags: ['User'],
//     }),

//     // get specific book
//     getBook: builder.query({
//       // get: 'http://localhost:8000/api/v1/books/id'

//       query: (id) => {
//         return {
//           url: `/${id}`,
//           params: { id },
//         };
//       },
//       providesTags: ['User'],
//     }),

//     // add new Transaction
//     addBook: builder.mutation({
//       query: (payload) => ({
//         // post: 'http://localhost:8000/api/v1/books'
//         url: '/',
//         method: 'POST',
//         body: payload,
//       }),
//       invalidatesTags: ['Book'],
//     }),
//     // add new Transaction
//     updateBook: builder.mutation({
//       query: (payload) => ({
//         // patch: 'http://localhost:8000/api/v1/books'
//         url: '/',
//         method: 'POST',
//         body: payload,
//       }),
//       invalidatesTags: ['Book'],
//     }),

//     // delete record
//     deleteBooks: builder.mutation({
//       query: (id) => {
//         // delete: 'http://localhost:8000/api/v1/books'
//         return {
//           url: `/${id}`,
//           method: 'DELETE',
//           body: id,
//         };
//       },
//       invalidatesTags: ['Book'],
//     }),
//     // add new Transaction
//     loginUser: builder.mutation({
//       query: (payload) => ({
//         url: '/signin',
//         method: 'POST',
//         body: payload,
//       }),
//       invalidatesTags: ['User'],
//     }),
//     SignupUser: builder.mutation({
//       query: (payload) => ({
//         url: '/signin',
//         method: 'POST',
//         body: payload,
//       }),
//       invalidatesTags: ['User'],
//     }),
//   }),
// });

// export const { useLoginUserMutation, useSignupUserMutation } = userSlice;

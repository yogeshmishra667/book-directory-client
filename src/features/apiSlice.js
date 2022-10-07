import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8000/api/v1/books';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    // get all books
    getBooks: builder.query({
      // get: 'http://localhost:8000/api/v1/books'
      query: () => '/',
      providesTags: ['Post'],
    }),

    // get labels
    getLabels: builder.query({
      // get: 'http://localhost:8000/api/v1/books/id'
      query: () => '/api/labels',
      providesTags: ['transaction'],
    }),

    // add new Transaction
    addTransaction: builder.mutation({
      query: (payload) => ({
        // post: 'http://localhost:8000/api/v1/books'
        url: '/api/transaction',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Post'],
    }),

    // delete record
    deleteTransaction: builder.mutation({
      query: (id) => ({
        // delete: 'http://localhost:8000/api/v1/books'
        url: `book/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetBooksQuery } = apiSlice;

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
      providesTags: ['books'],
    }),

    // get specific book
    getBook: builder.query({
      // get: 'http://localhost:8000/api/v1/books/id'
      query: (id) => `${id}`,
      providesTags: ['book'],
    }),

    // add new Transaction
    addBook: builder.mutation({
      query: (payload) => ({
        // post: 'http://localhost:8000/api/v1/books'
        url: '/',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Books'],
    }),
    // add new Transaction
    updateBook: builder.mutation({
      query: (payload) => ({
        // patch: 'http://localhost:8000/api/v1/books'
        url: '/',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Books'],
    }),

    // delete record
    deleteBooks: builder.mutation({
      query: (id) => ({
        // delete: 'http://localhost:8000/api/v1/books'
        url: `/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Books'],
    }),
    //additional feature for book

    // get top 5 books
    getTop5Books: builder.query({
      // get: 'http://localhost:8000/api/v1/books/top-5-books'
      query: () => '/top-5-books',
      providesTags: ['books'],
    }),
    // get latest book
    getLatestBooks: builder.query({
      // get: 'http://localhost:8000/api/v1/books/latest-book'
      query: () => '/latest-book',
      providesTags: ['books'],
    }),
    // get best seller books
    getBestSellerBooks: builder.query({
      // get: 'http://localhost:8000/api/v1/books/bestSeller'
      query: () => '/bestSeller',
      providesTags: ['books'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useGetTop5BooksQuery,
  useGetLatestBooksQuery,
  useGetBestSellerBooksQuery,
} = apiSlice;

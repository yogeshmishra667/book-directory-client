import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8000/api/v1/books';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  tagTypes: ['Book'],
  endpoints: (builder) => ({
    // get all books
    getBooks: builder.query({
      // get: 'http://localhost:8000/api/v1/books'
      query: () => '/',
      providesTags: ['Book'],
    }),

    // get specific book
    getBook: builder.query({
      // get: 'http://localhost:8000/api/v1/books/id'

      query: (id) => {
        console.log(id);
        return {
          url: `/${id}`,
          params: { id },
        };
      },
      providesTags: ['Book'],
    }),

    // add new Transaction
    addBook: builder.mutation({
      query: (payload) => ({
        // post: 'http://localhost:8000/api/v1/books'
        url: '/',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Book'],
    }),
    // add new Transaction
    updateBook: builder.mutation({
      query: (payload) => ({
        // patch: 'http://localhost:8000/api/v1/books'
        url: '/',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Book'],
    }),

    // delete record
    deleteBooks: builder.mutation({
      query: (id) => {
        // delete: 'http://localhost:8000/api/v1/books'
        return {
          url: `/${id}`,
          method: 'DELETE',
          body: id,
        };
      },
      invalidatesTags: ['Book'],
    }),
    //additional feature for book

    // get top 5 books
    getTop5Books: builder.query({
      // get: 'http://localhost:8000/api/v1/books/top-5-books'
      query: () => '/top-5-books',
      providesTags: ['Book'],
    }),
    // get latest book
    getLatestBooks: builder.query({
      // get: 'http://localhost:8000/api/v1/books/latest-book'
      query: () => '/latest-book',
      providesTags: ['Book'],
    }),
    // get best seller books
    getBestSellerBooks: builder.query({
      // get: 'http://localhost:8000/api/v1/books/bestSeller'
      query: () => '/bestSeller',
      providesTags: ['Book'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useDeleteBooksMutation,
  useGetTop5BooksQuery,
  useGetLatestBooksQuery,
  useGetBestSellerBooksQuery,
} = apiSlice;

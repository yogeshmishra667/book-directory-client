import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from '../utils/CookiesHelper';

const baseURI = 'http://localhost:8000/api/v1/';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseURI,
    prepareHeaders: (headers) => {
      const accessToken = 'Bearer ' + getCookie('user-token');

      // If we have a token set in state, let's assume that we should be passing it.
      if (accessToken) {
        headers.set('Authorization', accessToken);
      }
      return headers;
    },
  }),
  tagTypes: ['Book', 'User'],
  endpoints: (builder) => ({
    updateMe: builder.mutation({
      query: (payload) => ({
        url: 'users/updateMe',
        method: 'PATCH',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: 'users/login',
        method: 'POST',

        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    signupUser: builder.mutation({
      query: (payload) => ({
        url: 'users/signup',
        method: 'POST',

        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    // get all books
    getBooks: builder.query({
      // get: 'http://localhost:8000/api/v1/books'
      query: () => 'books/',
      providesTags: ['Book'],
    }),

    // get specific book
    getBook: builder.query({
      // get: 'http://localhost:8000/api/v1/books/id'

      query: (id) => {
        return {
          url: `/books/${id}`,
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
    payment: builder.query({
      query: (id) => {
        return {
          url: `books/create-checkout-session/${id}`,
        };
      },
      providesTags: ['Book'],
    }),

    // add new Transaction
    updateBook: builder.mutation({
      query: (id) => ({
        // patch: 'http://localhost:8000/api/v1/books'
        url: `/books/${id}`,
        method: 'PATCH',
        body: id,
      }),
      invalidatesTags: ['Book'],
    }),

    // delete record
    deleteBooks: builder.mutation({
      query: (id) => {
        // delete: 'http://localhost:8000/api/v1/books'
        return {
          url: `/books/${id}`,
          method: 'DELETE',
          body: id,
          credentials: 'include',
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
      query: () => '/books/latest-book',
      providesTags: ['Book'],
    }),
    // get best seller books
    getBestSellerBooks: builder.query({
      // get: 'http://localhost:8000/api/v1/books/bestSeller'
      query: () => '/bestSeller',
      providesTags: ['Book'],
    }),
    // get all users
    getUsers: builder.query({
      // get: 'http://localhost:8000/api/v1/users'
      query: () => 'users',
      providesTags: ['User'],
    }),
  }),
});

export const {
  usePaymentQuery,
  useUpdateMeMutation,
  useLoginUserMutation,
  useSignupUserMutation,
  useGetUsersQuery,
  useGetBooksQuery,
  useGetBookQuery,
  useDeleteBooksMutation,
  useGetTop5BooksQuery,
  useGetLatestBooksQuery,
  useGetBestSellerBooksQuery,
} = apiSlice;

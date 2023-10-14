import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Replace with your API base URL
  endpoints: (builder) => ({
    // Define your API endpoints here
    // Example:
    getPosts: builder.query({
      query: () =>( {
        url: '/leadservices/leads',
        method: 'POST',
        body: ""
      })
    }),
  }),
});

export const { useGetPostsQuery } = api;
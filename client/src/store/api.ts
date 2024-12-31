import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@/utils/constants";

interface ClickCount {
  id: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["clicks"],
  endpoints: (builder) => ({
    // Query to fetch clicks
    getClicks: builder.query<ClickCount[], void>({
      query: () => "/clicks",
      providesTags: ["clicks"],
    }),

    // Mutation to create new click count
    createClick: builder.mutation<ClickCount, void>({
      query: () => ({
        url: "/clicks",
        method: "POST",
      }),
      invalidatesTags: ["clicks"], // This will refetch the getClicks query after mutation
    }),
  }),
});

// Export hooks for usage in components
export const { useGetClicksQuery, useCreateClickMutation } = apiSlice;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL,
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = getState()?.auth.access_token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
        },
    }),
    endpoints: () => ({}),
});

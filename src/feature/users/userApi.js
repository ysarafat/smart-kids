import { apiSlice } from '../api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loggedUser: builder.query({
            query: (id) => ({
                url: `/users/find/${id}`,
                method: 'GET',
            }),
        }),
    }),
});
export const { useLoggedUserQuery } = userApi;

import { apiSlice } from '../api/apiSlice';
import { userSignin } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: '/auth/signup',
                method: 'POST',
                body: data,
            }),
        }),
        signin: builder.mutation({
            query: (data) => ({
                url: '/auth/signin',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        'auth',
                        JSON.stringify({
                            success: result.data.success,
                            message: result.data.message,
                            access_token: result.data.access_token,
                            data: result.data.data,
                        })
                    );
                    dispatch(
                        userSignin({
                            success: result.data.success,
                            message: result.data.message,
                            access_token: result.data.access_token,
                            data: result.data.data,
                        })
                    );
                } catch (error) {
                    // nothing
                }
            },
        }),
    }),
});

export const { useSignupMutation, useSigninMutation } = authApi;

import { apiSlice } from '../api/apiSlice';
import { userSignin } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: '/users/signup',
                method: 'POST',
                body: data,
            }),
            // async onQueryStarted(arg, { queryFulfilled, dispatch }) {
            //     try {
            //         const result = await queryFulfilled;
            //         localStorage.setItem('access_token', JSON.stringify(result.access_token));
            //         dispatch(
            //             userSignin({
            //                 success: result.success,
            //                 message: result.message,
            //                 access_token: result.access_token,
            //                 data: result.data,
            //             })
            //         );
            //     } catch (error) {
            //         // todo
            //         console.log(error);
            //     }
            // },
        }),
        signin: builder.mutation({
            query: (data) => ({
                url: '/users/signin',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result.data.access_token);
                    localStorage.setItem('access_token', JSON.stringify(result.data.access_token));
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

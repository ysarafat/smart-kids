import { apiSlice } from '../api/apiSlice';

export const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCourse: builder.query({
            query: () => '/course/all',
        }),
        getSingleCourse: builder.query({
            query: (id) => ({
                url: `course/${id}`,
                method: 'GET',
            }),
        }),
        createCourse: builder.mutation({
            query: (data) => ({
                url: '/course/create',
                method: 'POST',
                body: data,
            }),
        }),
        updateCourse: builder.mutation({
            query: (data) => ({
                url: '/course/update/:id',
                method: 'PATCH',
                body: data,
            }),
        }),
        enrollCourse: builder.mutation({
            query: (id) => ({
                url: `/course/enroll/${id}`,
                method: 'PATCH',
            }),
        }),
        deleteCourse: builder.mutation({
            query: (id) => ({
                url: `/course/delete/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetAllCourseQuery,
    useGetSingleCourseQuery,
    useCreateCourseMutation,
    useUpdateCourseMutation,
    useEnrollCourseMutation,
    useDeleteCourseMutation,
} = courseApi;

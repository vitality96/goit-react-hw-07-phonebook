import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62c58d12a361f7251287e49f.mockapi.io/contacts',
    }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        getAllContacts: builder.query({
            query: () => '',
            providesTags: ['Contact'],
        }),
        createContact: builder.mutation({
            query: (object) => ({
                method: 'POST',
                body: object,
            }),
            invalidatesTags: ['Contact'],
        }),
        editContact: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/${id}`,
                method: 'PUT',
                body: rest,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
        getContact: builder.query({
            query: (id) => `/${id}`,
            invalidatesTags: ['Contact'],
        })
    }),
});

export const {
    useGetAllContactsQuery,
    useCreateContactMutation,
    useEditContactMutation,
    useDeleteContactMutation,
    useGetContactQuery
} = contactsApi;

export default contactsApi;
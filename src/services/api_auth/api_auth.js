import { createApi} from '@reduxjs/toolkit/query/react';
import baseQuery from './api_authHelper';



export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        register: builder.mutation({
            query: credentials => ({
                url: "users/register",
                method: "POST",
                body: credentials,
                skipToken: true,
            }),
            providesTags: ['User'],
        }),
        loginGoogleUser: builder.mutation({
            query: credentials => ({
                url: "users/google",
                method: "POST",
                body: credentials,
                skipToken: true,
            })
        }),


        logIn: builder.mutation({
            query: credentials => ({
                url: "users/login",
                method: "POST",
                body: credentials,
               
            }),
            providesTags: ['User'],
        }),

    
        logOut: builder.mutation({
            query: () => ({
                url: "users/logout",
                method: "POST",
                
            }),
            invalidatesTags: ['User'],
        }),
    })
});

export const {
  useRegisterMutation,
  useLogInMutation,
  useLogOutMutation,
  useLoginGoogleUserMutation
} = authAPI;

export default authAPI;
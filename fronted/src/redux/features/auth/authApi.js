import { getBaseUrl } from "../../../utils/baseURL";
import { setUser } from "./authSlice";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/auth`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser({ user: data.user, token: data.token }));
        } catch (err) {
          console.error("failed to logout");
        }
      },
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser({ user: data.user, token: data.token }));
        } catch (err) {
          console.error(err);
        }
      },
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      refetchOnMount: true,
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),

      invalidatesTags: ["User"],
    }),
    updateUserRole: builder.mutation({
      query: (userId, role) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: { role },
      }),

      invalidatesTags: ["User"],
    }),

    editProfile: builder.mutation({
      query: (profileData) => ({
        url: `/edit-profile`,
        method: "PATCH",
        body: profileData,
      }),

      invalidatesTags: ["User"],
    }),
  }),
});

export const {useRegisterUserMutation,useLoginUserMutation,useLogoutUserMutation,useGetUserQuery,useDeleteUserMutation,useUpdateUserRoleMutation,useEditProfileMutation} = authApi;
export default authApi;



import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = (state) => state.users.items;
export const selectIsLoading = (state) => state.users.isLoading;
export const selectError = (state) => state.users.error;

export const selectFollowerOf = (state) => state.followerOf;

export const selectModifiedUsers = createSelector(
  [selectUsers, selectFollowerOf],
  (users, followerOf) => {
    const modifiedUsers = users.map((user) => ({
      ...user,
      isFollow: followerOf.includes(user.id),
    }));
    return modifiedUsers;
  }
);

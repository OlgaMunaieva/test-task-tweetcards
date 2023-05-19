import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchUsers, toggleFollowing } from "./operations";

const STATUS = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

const arrThunks = [fetchUsers, toggleFollowing];

const getActions = (type) => isAnyOf(...arrThunks.map((thunk) => thunk[type]));

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledGet = (state, action) => {
  state.items = action.payload;
};

const handleFulfilledToggleFollowing = (state, action) => {
  const index = state.items.findIndex((user) => user.id === action.payload.id);
  state.items[index] = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    increaseFollowers: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.followers += 1;
      }
    },
    decreaseFollowers: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.followers -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    const { FULFILLED, REJECTED, PENDING } = STATUS;
    builder
      .addCase(fetchUsers.fulfilled, handleFulfilledGet)
      .addCase(toggleFollowing.fulfilled, handleFulfilledToggleFollowing)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected)
      .addMatcher(getActions(FULFILLED), handleFulfilled);
  },
});

export const { increaseFollowers, decreaseFollowers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchUsers } from "./userOperations";

const STATUS = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

const arrThunks = [fetchUsers];

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

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    const { FULFILLED, REJECTED, PENDING } = STATUS;
    builder
      .addCase(fetchUsers.fulfilled, handleFulfilledGet)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected)
      .addMatcher(getActions(FULFILLED), handleFulfilled);
  },
});

export const usersReducer = usersSlice.reducer;

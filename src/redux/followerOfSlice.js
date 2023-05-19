import { createSlice } from "@reduxjs/toolkit";

const InitialState = [];
const followerOfSlice = createSlice({
  name: "followerOf",
  initialState: InitialState,
  reducers: {
    addFollowId: {
      reducer(state, action) {
        state.push(action.payload);
      },
      // excludeFollowId: {
      // reducer(state, action) {
      //   state.push(action.payload);
    },
  },
});

export const { addFollowId } = followerOfSlice.actions;
export const followerOfReducer = followerOfSlice.reducer;

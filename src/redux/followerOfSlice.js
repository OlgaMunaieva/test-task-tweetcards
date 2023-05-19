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
    },
    excludeFollowId: {
      reducer(state, action) {
        const index = state.indexOf(action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
    },
  },
});

export const { addFollowId, excludeFollowId } = followerOfSlice.actions;
export const followerOfReducer = followerOfSlice.reducer;

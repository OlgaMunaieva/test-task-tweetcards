import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchUsers, updateUser } from "./operations";

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
  state.items = [...state.items, ...action.payload];
};

// const handleUpdateUser = (state, action) => {
//   const index = state.items.findIndex((user) => user.id === action.payload.id);
//   state.items[index] = action.payload;
// };

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    clearUsers: (state) => {
      state.items = [];
    },
    increaseFollowers: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.followers += 1;
        fetch(`https://64540bc3e9ac46cedf3665cc.mockapi.io/users/${itemId}`, {
          method: "PUT", // or PATCH
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ followers: item.followers }),
        })
          .then((res) => {
            console.log(res);
            if (res.ok) {
              return res.json();
            }
            throw new Error("Error");
          })
          .catch((e) => {
            alert(e);
          });
      }
    },
    decreaseFollowers: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.followers -= 1;
        fetch(`https://64540bc3e9ac46cedf3665cc.mockapi.io/users/${itemId}`, {
          method: "PUT", // or PATCH
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ followers: item.followers }),
        })
          .then((res) => {
            console.log(res);
            if (res.ok) {
              return res.json();
            }
            throw new Error("Error");
          })
          .catch((e) => {
            alert(e);
          });
      }
    },
  },
  extraReducers: (builder) => {
    const { FULFILLED, REJECTED, PENDING } = STATUS;
    builder
      .addCase(fetchUsers.fulfilled, handleFulfilledGet)
      // .addCase(updateUser.fulfilled, handleUpdateUser)
      .addMatcher(getActions(PENDING), handlePending)
      .addMatcher(getActions(REJECTED), handleRejected)
      .addMatcher(getActions(FULFILLED), handleFulfilled);
  },
});

export const { increaseFollowers, decreaseFollowers, clearUsers } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;

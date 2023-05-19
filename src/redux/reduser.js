import { combineReducers } from "redux";
import { usersReducer } from "./usersSlice";
import { followerOfReducer } from "./followerOfSlice";

export const reducer = combineReducers({
  users: usersReducer,
  followerOf: followerOfReducer,
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64540bc3e9ac46cedf3665cc.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/users");
      console.log(response);
      return await response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const toggleFollowing = createAsyncThunk(
  "users/toggleFollowing",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/users/${id}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

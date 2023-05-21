import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64540bc3e9ac46cedf3665cc.mockapi.io";

export const PER_PAGE = 6;

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (page, { rejectWithValue }) => {
    const url = new URL("/users", axios.defaults.baseURL);
    url.searchParams.append("page", page);
    url.searchParams.append("limit", PER_PAGE);
    try {
      const response = await axios.get(url.toString(), {
        headers: { "content-type": "application/json" },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Failed to fetch tasks");
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userId, followers, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `/users/${userId}`,
        { followers: followers },
        { headers: { "content-type": "application/json" } }
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

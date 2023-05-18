import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64540bc3e9ac46cedf3665cc.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/users");
      return await response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

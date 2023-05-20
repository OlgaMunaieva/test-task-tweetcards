import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64540bc3e9ac46cedf3665cc.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/users");
      return await response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// export const toggleFollowing = createAsyncThunk(
//   "users/toggleFollowing",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`/users/${id}`);
//       // return response.data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userId, followers, { rejectWithValue }) => {
    console.log("hi");
    try {
      const response = await axios.put(
        `/users/${userId}`,
        { followers: followers },
        { headers: { "content-type": "application/json" } }
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// Пример использования
// Внутри компонента или другой логики Redux
// dispatch(updateUser({ userId, followers }))
//   .then((action) => {
//     // Обработка успешного обновления задачи
//     const updatedTask = action.payload;
//     // Do something with updated task
//   })
//   .catch((error) => {
//     // Обработка ошибки при обновлении задачи
//   });
// В этом примере мы создаем updateTask как createAsyncThunk, который выполняет PUT-запрос с использованием Axios. Если запрос успешен, мы возвращаем данные обновленной задачи, иначе выбрасываем ошибку. При использовании updateTask внутри компонента или другой логики Redux, мы можем обрабатывать успешное обновление задачи и ошибки с помощью .then и .catch.

// Убедитесь, что вы импортировали необходимые модули, такие как createAsyncThunk, axios, и что вы настроили Redux Store для работы с Redux Toolkit.

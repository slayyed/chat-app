import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../axios/api";
import { ICredentials } from "../../types/Credentials";
export const registerAccount = createAsyncThunk(
  "credentials/register",
  async (formData: Pick<ICredentials, "email" | "password">, thunkAPI) => {
    try {
      const response = await api.post("/register", formData);
      return response.data;
    } catch (e: any) {
      throw new Error(e.response.data.message);
    }
  }
);

export const loginIntoAccount = createAsyncThunk(
  "credentials/login",
  async (formData: Pick<ICredentials, "email" | "password">, thunkAPI) => {
    try {
      const response = await api.post("/login", formData);
      return response.data;
    } catch (e: any) {
      throw new Error(e.response.data.message);
    }
  }
);

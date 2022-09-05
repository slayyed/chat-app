import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICredentials } from "../../types/Credentials";
import { loginIntoAccount, registerAccount } from "../actions/credentials";

interface ICredentialsState {
  data: ICredentials | null;
  loading: boolean;
  error: string | null;
}

const initialState: ICredentialsState = {
  data: null,
  loading: false,
  error: null,
};

export const credentialsSlice = createSlice({
  name: "credentials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAccount.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registerAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      })
      .addCase(registerAccount.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginIntoAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loginIntoAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      })
      .addCase(loginIntoAccount.pending, (state, action) => {
        state.loading = true;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } =
//   credentialsSlice.actions;

export default credentialsSlice.reducer;

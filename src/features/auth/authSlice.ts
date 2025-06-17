import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from './authTypes';
import { loginUser } from './authThunk';
import { registerUser } from './authThunk';
const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Resets the entire auth state (e.g., on logout)
    resetAuthState(state) {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.error = null;
    },
    // Sets the authenticated user's data
    setUser(state, action: PayloadAction<AuthState['user']>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add async thunks (e.g., login, register) here later
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetAuthState, setUser } = authSlice.actions;
export default authSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { LoginCredentials } from './authTypes';
import type { RegisterCredintials } from './authTypes';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Login failed. Try again.',
      );
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (Credential: RegisterCredintials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/register', Credential);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Register failed. Try again.',
      );
    }
  },
);

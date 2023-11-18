import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  error: null,
  isLoggedIn: false,
};

const authAPISlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    setToken: (state, action) => {
      const token = action.payload;
      state.token = token;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUserRefresh: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});
 
export const {
  setCredentials,
  setIsLoggedIn,
  logout,
  setError,
  setUserRefresh,
} = authAPISlice.actions;

export default authAPISlice.reducer;
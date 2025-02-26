import { createSlice } from '@reduxjs/toolkit';
import { IGeneralState } from './interface';

const initialState: IGeneralState = {
  language: 'en',
  isGuest: true,
  accessToken: null,
  refreshToken: null,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload || 'en';
    },
    setGuest: (state, { payload }) => {
      state.isGuest = payload;
    },
    setAccessToken: (state, { payload }) => {
      state.accessToken = payload;
    },
    setRefreshToken: (state, { payload }) => {
      state.refreshToken = payload;
    },
  },
});

export const { setLanguage, setGuest, setAccessToken, setRefreshToken } = generalSlice.actions;

export default generalSlice.reducer;

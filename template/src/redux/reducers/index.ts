import { combineReducers } from '@reduxjs/toolkit';
import { authApis } from '../apis/auth';
import generalSlice from './generalSlice';

export const allReducers = combineReducers({
  generalSlice,
  [authApis.reducerPath]: authApis.reducer,
});

import { configureStore } from '@reduxjs/toolkit';
import {
  userReducer,
} from './reducers/userReducer';
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

export const server = '/api/v1';
// export const server = 'https://google-auth2-0.vercel.app/api/v1';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import signInReducer from '../features/signIn/signInSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    signIn: signInReducer
  },
});

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Combine your reducers here

const store = configureStore({
  reducer: rootReducer, // Your combined reducers
});

export default store;
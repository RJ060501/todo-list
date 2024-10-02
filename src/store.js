import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = configureStore({
  reducer: {
    rootReducer,
  }
});

export default store;

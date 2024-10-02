import { configureStore } from 'redux';
import { combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = configureStore(rootReducer);

export default store;

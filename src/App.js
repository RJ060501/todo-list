import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, addTodo, deleteTodo } from './actions/todoActions';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo({ title }));
      setTitle('');
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.title} <button onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

import axios from 'axios';

export const getTodos = () => async (dispatch) => {
    const res = await axios.get('http://localhost:5000/todos');
    dispatch({ type: 'GET_TODOS', payload: res.data });
}

export const addTodos = (todo) => async (dispatch) => {
    const res = await axios.post('http://localhost:5000/todos', todo);
    dispatch({ type: 'ADD_TODOS', payload: res.data })
}

export const delTodos = (id) => async (dispatch) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    dispatch({ type: 'DELETE_TODO', payload: id });
}


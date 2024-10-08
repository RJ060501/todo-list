const initialState = {
    todos: [],
  };
  
  export default function todoReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_TODOS':
        return { ...state, todos: action.payload };
      case 'ADD_TODO':
        return { ...state, todos: [...state.todos, action.payload] };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo._id !== action.payload),
        };
      default:
        return state;
    }
  }
  
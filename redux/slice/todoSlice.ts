import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState, Todo } from '../../types/TodoList'

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {},
    addTodoSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.todos = [...state.todos, ...action.payload]
    },

    deleteTodo: (state, action) => {},
    deleteTodoSuccess: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload)
    }
  },
});

export const { addTodo, addTodoSuccess, deleteTodo, deleteTodoSuccess } = todoSlice.actions;
export default todoSlice.reducer;
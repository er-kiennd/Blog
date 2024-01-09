import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState, Todo } from '@/types/TodoList'

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo[]>) => {      
      state.todos = action.payload
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
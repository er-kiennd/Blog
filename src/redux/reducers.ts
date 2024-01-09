import { combineReducers } from 'redux';
import todoList from '@/redux/slice/todoSlice'

const rootReducer = combineReducers({
  todos: todoList,
});

export default rootReducer;
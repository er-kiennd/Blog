import { put, takeEvery } from 'redux-saga/effects';
import { addTodo, addTodoSuccess, deleteTodo, deleteTodoSuccess } from '../slice/todoSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '@/types/TodoList';

function* handleAddTodo(action: PayloadAction<Todo[]>) {
  yield put(addTodoSuccess(action.payload));
}

function* handleDeleteTodo(action: PayloadAction<number>) {
  yield put(deleteTodoSuccess(action.payload))
}

export default function* todoSaga() {
  yield takeEvery(addTodo.type, handleAddTodo);
  yield takeEvery(deleteTodo.type, handleDeleteTodo);
}
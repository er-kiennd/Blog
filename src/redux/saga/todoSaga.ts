import { put, takeEvery } from 'redux-saga/effects';
import { addTodo } from '../slice/todoSlice';

function* handleAddTodo(action: any) {
  yield put(addTodo(action.payload));
}

export default function* todoSaga() {
  yield takeEvery(addTodo, handleAddTodo);
}
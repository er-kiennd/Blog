import { all } from 'redux-saga/effects';
import todoSaga from './saga/todoSaga'

function* rootSaga() {
  yield all([
    todoSaga()
  ]);
}

export default rootSaga;
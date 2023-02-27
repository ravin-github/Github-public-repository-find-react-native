import {all} from 'redux-saga/effects';
import {repoSaga} from '../entities/repo';

export default function* rootSaga() {
  yield all([
    repoSaga()
  ]);
}

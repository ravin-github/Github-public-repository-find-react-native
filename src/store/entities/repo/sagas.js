import {all, call, fork, put, take, takeEvery} from 'redux-saga/effects';
import reposService from '@services/repoService';

import {
  repoAction,
  repoActionSuccess,
  repoActionFailure,
} from './slice';

function* handleRepoAction({payload}) {
  console.log("payload",payload);
  try {
    const {data,status}  = yield call(reposService.getRepo,payload)
    if (status === 200) {                   
      yield put(repoActionSuccess({data:data ,page: payload?.page}));
    } else {
      yield put(repoActionFailure());
    }
  } catch (error) {
    yield put(repoActionFailure());
  }
};

function* watchFetchRequests() {
  while (true) {
    const action = yield take(repoAction);
    yield call(handleRepoAction, action);
  }
}

export function* repoSaga() {
  yield all([fork(watchFetchRequests)]);
}

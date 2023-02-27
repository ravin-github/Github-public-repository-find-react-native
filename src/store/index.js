import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import rootSaga from './sagas';
import rootReducer from './reducers';

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({thunk: false}).prepend(SagaMiddleware);
  },
});

SagaMiddleware.run(rootSaga);

export default store;

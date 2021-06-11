import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
//import { composeWithDevTools } from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware();
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
export default store;
sagaMiddleware.run(rootSaga);

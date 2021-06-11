import { all } from 'redux-saga/effects';
import usersSaga from './Users/saga';

export default function* rootSaga() {
    yield all([
        usersSaga(),
    ]);
}

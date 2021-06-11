import {takeLatest, call, put} from 'redux-saga/effects';
import USERS_TYPES from './types';
import usersActions from './actions';
import { IResponse } from '../../models/Response';
import Service from '../../service';

const Users = new Service('users');

function* getUsers() {
  const response: IResponse = yield call(Users.getAll);
  yield put(usersActions.setUsers(response));
}

export default function* index() {
  yield takeLatest(USERS_TYPES.GET_USERS, getUsers);
}

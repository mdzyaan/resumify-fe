import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { LOGIN_USER } from './constants';
import { loginUser } from './actions';
import request from 'utils/request';
import routeTemplates from 'common/route-templates';
import convertErrorMsg from 'utils/convertErrorMsg';

export function* loginSaga({ payload, metadata }) {
  const { setAuthenticated, history } = metadata;

  try {
    const response = yield call(request, {
      method: 'post',
      endpoint: 'api/login', // e.g endpoint
      
      config: {
        data: {
          ...payload,
        }
      }
    });
    if (response.data.success) {
      setAuthenticated(response.data.token);
      history.push(routeTemplates.dashboard);
      yield put(loginUser.success());
    } else {
      yield put(loginUser.error({payload: response.data}));
    }
  } catch (error) {
    const errorMessage = convertErrorMsg(error);
    yield put(loginUser.error({payload: {success: false, message: errorMessage}}));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* login() {
  yield takeLatest(LOGIN_USER.START, loginSaga);
}

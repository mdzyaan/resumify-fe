import {
  call,
  put,
  // select,
  takeLatest,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { SIGNUP_USER } from './constants';
import { signupUser } from './actions';
import request from 'utils/request';
import convertErrorMsg from 'utils/convertErrorMsg';
import routeTemplates from 'common/route-templates';

export function* sigupUserData({ payload, metadata }) {
  // const { setAuthenticated } = metadata;

  try {
    const response = yield call(request, {
      method: 'post',
      endpoint: 'api/register', // e.g endpoint
      config: {
        data: {
          ...payload,
        }
      }
    });
    if (response.data.success) {
      yield put(push(routeTemplates.signin));
      yield put(signupUser.success());
    } else {
      yield put(signupUser.error({ payload: response.data }));
    }
  } catch (error) {
    const errorMessage = convertErrorMsg(error);
    yield put(signupUser.error({ payload: { success: false, message: errorMessage } }));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* register() {
  yield takeLatest(SIGNUP_USER.START, sigupUserData);
}

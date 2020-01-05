import {
  call,
  put,
  // select,
  takeLatest,
} from 'redux-saga/effects';
import { DEFAULT_ACTION } from './constants';
import { defaultAction } from './actions';
import request from 'utils/request';
import convertErrorMsg from 'utils/convertErrorMsg';

export function* dashboardSaga({ payload, metadata }) {
  // const token = yield select(makeSelectUserToken()) || localStorage.getItem('resumify-token');

  try {
    const response = yield call(request, {
      method: 'post',
      endpoint: 'app/register', // e.g endpoint
      config: {
        headers: {
          // Authorization: `Bearer ${token}`,
        },
        data: {
          ...payload,
        },
      },
    });

    // @dev - put() dispatch action to change redux state
    yield put(defaultAction.success(response.data));
  } catch (error) {
    const errorMessage = convertErrorMsg(error);
    yield put(defaultAction.error(errorMessage));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* dashboard() {
  yield takeLatest(DEFAULT_ACTION.START, dashboardSaga);
}

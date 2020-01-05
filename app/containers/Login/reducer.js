/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { LOGIN_USER } from './constants';

export const initialState = {
  loading: false,
  error: false,
  success: true,
  message: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOGIN_USER.START:
        draft.loading = true;
        draft.error = false;
        break;

      case LOGIN_USER.SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        draft.message = null;
        break;

      case LOGIN_USER.ERROR:
        draft.loading = false;
        draft.error = true;
        draft.success = false;
        draft.message = action.payload.message;
        break;
    }
  });
};

export default loginReducer;

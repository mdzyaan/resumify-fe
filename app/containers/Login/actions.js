/*
 *
 * Login actions
 *
 */

import { LOGIN_USER } from './constants';
import { defineAction } from 'utils/action-helper';

export const loginUser = {
  start: ({ payload, metadata }) =>
    defineAction({ type: LOGIN_USER.START, payload, metadata }),
  success: () => {
    return defineAction({ type: LOGIN_USER.SUCCESS });
  },
  error: ({ payload }) =>
    defineAction({
      type: LOGIN_USER.ERROR,
      payload,
    }),
};

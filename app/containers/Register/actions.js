/*
 *
 * Register actions
 *
 */

import { SIGNUP_USER } from './constants';
import { defineAction } from 'utils/action-helper';

export const signupUser = {
  start: ({ payload, metadata }) =>
    defineAction({ type: SIGNUP_USER.START, payload, metadata }),
  success: () => {
    return defineAction({ type: SIGNUP_USER.SUCCESS });
  },
  error: ({ payload }) =>
    defineAction({ type: SIGNUP_USER.ERROR, payload }),
};


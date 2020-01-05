/*
 *
 * Dashboard actions
 *
 */

import { DEFAULT_ACTION } from './constants';
import { defineAction } from 'utils/action-helper';

export const defaultAction = {
  start: ({ payload, metadata }) =>
    defineAction({ type: DEFAULT_ACTION.START, payload, metadata }),
  success: ({ payload, metadata }) => {
    return defineAction({ type: DEFAULT_ACTION.SUCCESS, payload, metadata });
  },
  error: ({ error }) =>
    defineAction({
      type: DEFAULT_ACTION.ERROR,
      payload: {
        error,
      },
    }),
};

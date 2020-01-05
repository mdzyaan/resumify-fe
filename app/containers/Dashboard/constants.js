/*
 *
 * Dashboard constants
 *
 */

import { defineApiActionTypes } from 'utils/action-helper';
const prefix = 'ui/containers/Dashboard';

/*
 * @dev defineApiActionTypes a function that
 * return concat base with START,SUCCESS,FAILURE
 */
export const DEFAULT_ACTION = defineApiActionTypes(
  `${prefix}/DEFAULT_ACTION_START`,
);

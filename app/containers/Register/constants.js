/*
 *
 * Register constants
 *
 */

import { defineApiActionTypes } from 'utils/action-helper';
const prefix = 'ui/containers/Register';

/*
 * @dev defineApiActionTypes a function that
 * return concat base with START,SUCCESS,FAILURE
 */
export const SIGNUP_USER = defineApiActionTypes(`${prefix}/SIGNUP_USER_START`);

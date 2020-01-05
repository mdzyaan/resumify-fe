/*
 *
 * Login constants
 *
 */

import { defineApiActionTypes } from 'utils/action-helper';
const prefix = 'ui/containers/Login';

export const LOGIN_USER = defineApiActionTypes(
  `${prefix}/LOGIN_USER_START`,
);

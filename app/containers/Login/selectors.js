import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.login || initialState;

const makeSelectLogin = () =>
  createSelector(
    selectLoginDomain,
    subState => subState,
  );

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(
    selectLoginDomain,
    subState => subState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectLoginDomain,
    subState => subState.error,
  );
  
const makeSelectMessage = () =>
  createSelector(
    selectLoginDomain,
    subState => subState.message,
  );

const makeSelectSuccess = () =>
  createSelector(
    selectLoginDomain,
    subState => subState.success,
  );


export {
  makeSelectLogin,
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
  makeSelectSuccess,
};
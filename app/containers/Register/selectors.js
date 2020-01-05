import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the register state domain
 */

const selectRegisterDomain = state => state.register || initialState;

const makeSelectRegisterState = () =>
  createSelector(
    selectRegisterDomain,
    subState => subState,
  );

const makeSelectLoading = () =>
  createSelector(
    selectRegisterDomain,
    subState => subState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectRegisterDomain,
    subState => subState.error,
  );

const makeSelectMessage = () =>
  createSelector(
    selectRegisterDomain,
    subState => subState.message
  );

const makeSelectSuccess = () =>
  createSelector(
    selectRegisterDomain,
    subState => subState.success
  );


export {
  makeSelectRegisterState,
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
  makeSelectSuccess,
};
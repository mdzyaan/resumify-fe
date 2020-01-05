import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dashboard state domain
 */

const selectDashboardDomain = state => state.dashboard || initialState;

const makeSelectDashboard = () =>
  createSelector(
    selectDashboardDomain,
    subState => subState,
  );

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(
    selectDashboardDomain,
    subState => subState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectDashboardDomain,
    subState => subState.error,
  );

export { makeSelectDashboard, makeSelectLoading, makeSelectError };

/**
 *
 * Dashboard
 *
 */

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectDashboard,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import { defaultAction } from './actions';

import saga from './saga';
import messages from './messages';

export const Dashboard = props => {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <h1>Dashboard</h1>
    </div>
  );
};

Dashboard.propTypes = {
  // defaultActionStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export const mapDispatchToProps = dispatch => {
  return {
    defaultActionStart: ({ payload, metadata }) =>
      dispatch(defaultAction.start({ payload, metadata })),
  };
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);

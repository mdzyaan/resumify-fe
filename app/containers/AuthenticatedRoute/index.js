/**
 *
 * AuthenticatedRoute
 *
 */
import React, { useContext } from 'react'; //useContext, //useEffect, //useState,
import { Route, Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { AuthContext } from 'containers/Providers/AuthProvider';
import routeTemplates from 'common/route-templates';

export const AuthenticatedRoute = ({ component: WrapComponent, ...others }) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Route
      {...others}
      render={routeProps =>
        authenticated ? (
          <WrapComponent {...routeProps} />
        ) : (
          <Redirect to={routeTemplates.home} />
        )
      }
    />
  );
};

export default compose(withRouter)(AuthenticatedRoute);


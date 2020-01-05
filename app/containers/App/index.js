import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'containers/Header';
import Login from 'containers/Login/Loadable';
import Register from 'containers/Register/Loadable';
import { AuthContext } from 'containers/Providers/AuthProvider';
import AuthenticatedRoute from 'containers/AuthenticatedRoute';
import Dashboard from 'containers/Dashboard';
import routeTemplates from 'common/route-templates';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <>
      <Header />
      {/* <h1>Hello</h1>  */}
      <Switch>
        <Route exact path={routeTemplates.signin} component={Login} />
        <Route exact path={routeTemplates.signup} component={Register} />
        <AuthenticatedRoute
          exact
          path={routeTemplates.dashboard}
          component={Dashboard}
        /> 
        <Route component={NotFoundPage} />

      </Switch>
      <GlobalStyle />
    </>
  );
}

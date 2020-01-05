/**
 *
 * Login
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
  makeSelectLogin,
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
  makeSelectSuccess,
} from './selectors';
import reducer from './reducer';
import { loginUser } from './actions';
import saga from './saga';
import messages from './messages';

import Alert from 'components/Alert';
import routeTemplates from 'common/route-templates';
import Button from 'components/Button';

import classnames from 'classnames';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  InputGroup,
  // Form,
} from 'reactstrap';
import styled from 'styled-components';
import Input from 'components/Input';
import { fieldNames, loginValidationSchema } from './model';
import { Formik, Form, Field, getIn } from 'formik';
import { AuthContext } from 'containers/Providers/AuthProvider';

const LoginWrapper = styled.div`
  max-width: 25rem;
  margin: auto;
`;

export const Login = props => {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  
  const { loginUserStart, loading, message, success, history } = props;
  const { setAuthenticated, authenticated } = useContext(AuthContext);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  useEffect(() => {
    if (authenticated) {
      history.push(routeTemplates.dashboard);
    }
  }, []);

  const submitLoginForm = values => {
    loginUserStart({ payload: values, metadata: { setAuthenticated, history } });
  };
  
  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      {message && !success && (
        <Alert color="danger" fade={true}>
          {message}
        </Alert>
      )}
      {/* <FormattedMessage {...messages.header} /> */}
      <LoginWrapper className="p-0">
        <Card className="bg-white border-0 mt-2">
          <CardBody className="p-3 border-bottom">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <Formik
              validationSchema={loginValidationSchema}
              onSubmit={submitLoginForm}
              initialValues={{email: '', password: ''}}
              render={({ errors, touched }) => {
                return (
                  <Form>
                    <Field
                      name={fieldNames.email}
                      render={({ field, form: { setFieldTouched } }) => {
                        const errorMessage = getIn(errors, field.name);

                        if (errors[field.name] && touched[field.name]) {
                          loginUser.error({
                            payload: {
                              success: false,
                              message: errorMessage,
                            },
                          });
                        }
                        return (
                          <FormGroup
                            className={classnames(
                              'mb-3',
                              {
                                focused: emailFocused,
                              },
                              errors[field.name] && touched[field.name]
                                ? 'has-danger'
                                : !errors[field.name] &&
                                    touched[field.name] &&
                                    'has-success',
                            )}
                          >
                            <InputGroup className="input-group-alternative">
                              <Input
                                placeholder="Email"
                                type="email"
                                onFocus={e => setEmailFocused(true)}
                                onBlur={e => setEmailFocused(false)}
                                {...field}
                              />
                            </InputGroup>
                          </FormGroup>
                        );
                      }}
                    />
                    <Field
                      name={fieldNames.password}
                      render={({ field, form: { setFieldTouched } }) => {
                        return (
                          <FormGroup
                            className={classnames(
                              {
                                focused: passwordFocused,
                              },
                              errors[field.name] && touched[field.name]
                                ? 'has-danger'
                                : !errors[field.name] &&
                                    touched[field.name] &&
                                    'has-success',
                            )}
                          >
                            <InputGroup className="input-group-alternative">
                              <Input
                                placeholder="Password"
                                type="password"
                                autoComplete="off"
                                onFocus={e => setPasswordFocused(true)}
                                onBlur={e => setPasswordFocused(false)}
                                {...field}
                              />
                            </InputGroup>
                          </FormGroup>
                        );
                      }}
                    />
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin"
                      >
                        <span className="text-muted">Remember me</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button
                        loading={loading}
                        className="my-4 w-100"
                        color="primary"
                        type="submit"
                      >
                        Sign in
                      </Button>
                    </div>
                  </Form>
                );
              }}
            />
          </CardBody>
          <CardHeader className="bg-white pb-5">
            <div className="text-muted text-center mb-3">
              <small>Or sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-icon mt-2 mb-2"
                color="neutral"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <span className="btn-inner--icon mr-1">
                  <img
                    alt="..."
                    src={require('assets/img/icons/common/github.svg')}
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-icon mt-2 mb-2 ml-1"
                color="neutral"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <span className="btn-inner--icon mr-1">
                  <img
                    alt="..."
                    src={require('assets/img/icons/common/google.svg')}
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
        </Card>
      </LoginWrapper>
    </div>
  );
};

Login.propTypes = {
  loginUserStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  message: makeSelectMessage(),
  success: makeSelectSuccess(),
});

export const mapDispatchToProps = dispatch => {
  return {
    loginUserStart: ({ payload, metadata }) =>
      dispatch(loginUser.start({ payload, metadata })),
  };
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);

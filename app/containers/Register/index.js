/**
 *
 * Register
 *
 */

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Button from 'components/Button';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectRegisterState,
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
  makeSelectSuccess,
} from './selectors';
import reducer from './reducer';
import { signupUser } from './actions';

import saga from './saga';
import messages from './messages';
import routeTemplates from 'common/route-templates';
import classnames from 'classnames';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  // Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col,
} from 'reactstrap';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import { fieldNames, registerValidationSchema } from './models';
import { AuthContext } from 'containers/Providers/AuthProvider';
import Alert from 'components/Alert';


const RegisterWrapper = styled.div`
  max-width: 25rem;
  margin: auto;
`;

export const Register = props => {
  useInjectReducer({ key: 'register', reducer });
  useInjectSaga({ key: 'register', saga });
  const { signupUserStart, loading, message, success, history, error } = props;

  const { setAuthenticated, authenticated } = useContext(AuthContext);

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [repeatpasswordFocused, setRepeatPasswordFocused] = useState(false);

  useEffect(() => {
    if (authenticated) {
      history.push(routeTemplates.dashboard);
    }
  }, []);

  const submitRegisterForm = values => {
    console.log('values', values);
    signupUserStart({ payload: values, metadata: { setAuthenticated } });
  };

  return (
    <div>
      <Helmet>
        <title>Resumify - Sign up</title>
        <meta name="description" content="Description of Register" />
      </Helmet>
      {error && (
        <Alert color="danger" fade={true}>
          {message}
        </Alert>
      )}
      <RegisterWrapper className="p-0">
        <Card className="bg-white border-0">
          <CardBody className="p-3 border-bottom">
            <div className="text-center text-muted mb-4">
              <small>Sign up with credentials</small>
            </div>
            <Formik
              validationSchema={registerValidationSchema}
              initialValues={{ email: '', password: '', name: '', repeatPassword: '' }}
              onSubmit={submitRegisterForm}
              render={({ errors, touched }) => {
                return (
                  <Form>
                    <Field
                      name={fieldNames.name}
                      render={({ field, form: { setFieldTouched } }) => {
                        return (
                          <FormGroup
                            className={classnames(
                              'mb-3',
                              {
                                focused: nameFocused,
                              },
                              errors[field.name] && touched[field.name]
                                ? 'has-danger'
                                : !errors[field.name] && touched[field.name] && 'has-success'
                            )}
                          >
                            <InputGroup className="input-group-alternative">
                              <Input
                                placeholder="Name"
                                type="text"
                                className="is-invalid"
                                onFocus={e => setNameFocused(true)}
                                onBlur={e => setNameFocused(false)}
                                {...field}
                              />
                            </InputGroup>
                          </FormGroup>
                        );
                      }}
                    />
                    <Field
                      name={fieldNames.email}
                      render={({ field, form: { setFieldTouched } }) => {
                        return (
                          <FormGroup
                            className={classnames(
                              'mb-3',
                              {
                                focused: emailFocused,
                              },
                              errors[field.name] && touched[field.name]
                                ? 'has-danger'
                                : !errors[field.name] && touched[field.name] && 'has-success'
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
                                : !errors[field.name] && touched[field.name] && 'has-success'
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
                    <Field
                      name={fieldNames.repeatPassword}
                      render={({ field, form: { setFieldTouched } }) => {
                        return (
                          <FormGroup
                            className={classnames(
                              {
                                focused: repeatpasswordFocused,
                              },
                              errors[field.name] && touched[field.name]
                                ? 'has-danger'
                                : !errors[field.name] && touched[field.name] && 'has-success'
                            )}
                          >
                            <InputGroup className="input-group-alternative">
                              <Input
                                placeholder="Repeat password"
                                type="password"
                                autoComplete="off"
                                onFocus={e => setRepeatPasswordFocused(true)}
                                onBlur={e => setRepeatPasswordFocused(false)}
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
                      <label className="custom-control-label" htmlFor=" customCheckLogin">
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
                        Sign up
                      </Button>
                    </div>
                  </Form>
                );
              }}
            />
          </CardBody>
          <CardHeader className="bg-white pb-5">
            <div className="text-muted text-center mb-3">
              <small>Or sign up with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-icon mt-2 mb-2"
                color="neutral"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <span className="btn-inner--icon mr-1">
                  <img alt="..." src={require('assets/img/icons/common/github.svg')} />
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
                  <img alt="..." src={require('assets/img/icons/common/google.svg')} />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
        </Card>
      </RegisterWrapper>
    </div>
  );
};

Register.propTypes = {
  signupUserStart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  register: makeSelectRegisterState(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  message: makeSelectMessage(),
  success: makeSelectSuccess(),
});

export const mapDispatchToProps = dispatch => {
  return {
    signupUserStart: ({ payload, metadata }) =>
      dispatch(signupUser.start({ payload, metadata })),
  };
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Register);

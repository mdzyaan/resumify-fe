/**
 *
 * Header
 *
 */

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import messages from './messages';
import {
  Container,
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';
import styled from 'styled-components';
import ResumifyButton from 'components/Button';
import { AuthContext } from 'containers/Providers/AuthProvider';

const NavHeader = styled.h3`
  color: blue;
  color: ${p => p.theme.palette.primary};
  font-family: 'Pacifico' !important;
  text-transform: capitalize;
`;

export const Header = props => {
  const { setAuthenticated, authenticated, logOut } = useContext(AuthContext);
  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-light bg-white shadow"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <NavHeader>Resumify</NavHeader>
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon bg-primary" />
            </button>
            <button className="navbar-toggler" id="navbar_global">
              <span />
              <span />
              <span />
            </button>

            <UncontrolledCollapse navbar toggler="#navbar_global">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require('assets/img/brand/argon-react.png')}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>

              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <ResumifyButton
                    className="my-1"
                    size="sm"
                    color="link"
                    tag={Link}
                    to="/templates"
                  >
                    Templates
                  </ResumifyButton>
                </NavItem>
                {authenticated ? (
                  <>
                    <NavItem>
                      <ResumifyButton
                        className="my-1"
                        size="sm"
                        color="link"
                        tag={Link}
                        to="/profile"
                      >
                        Profile
                      </ResumifyButton>
                    </NavItem>
                    <NavItem className="mr-lg-4">
                      <ResumifyButton
                        className="my-1"
                        size="sm"
                        tag={Link}
                        to="/"
                        onClick={() => logOut()}
                        outline
                      >
                        Sign out
                      </ResumifyButton>
                    </NavItem>
                  </>
                ) : (
                  <>
                    <NavItem className="mr-lg-4">
                      <ResumifyButton
                        className="my-1"
                        size="sm"
                        color="link"
                        tag={Link}
                        to="/signin"
                      >
                        Sign in
                      </ResumifyButton>
                    </NavItem>
                    <NavItem>
                      <ResumifyButton
                        className="y-1"
                        size="sm"
                        tag={Link}
                        to="/signup"
                      >
                        Sign up
                      </ResumifyButton>
                    </NavItem>
                  </>
                )} 
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

Header.propTypes = {
  // defaultActionStart: PropTypes.func.isRequired,
};

export const mapDispatchToProps = dispatch => {
  return {
    defaultActionStart: ({ payload, metadata }) =>
      dispatch(defaultAction.start({ payload, metadata })),
  };
};
const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Header);

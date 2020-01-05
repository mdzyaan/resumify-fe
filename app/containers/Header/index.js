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

const NavbarBrandCustom = styled(NavbarBrand)`
  margin: 0 !important;
  background: ${p => p.theme.palette.primary};
  border-radius: 50px;
  padding: 5px 10px;
`;
const NavHeader = styled.h3`
  font-weight: bold;
  font-family: 'Roboto' !important;
  text-transform: capitalize;
  margin: 0;
  color: white;
  font-size: 24px;
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
            <NavbarBrandCustom className="mr-lg-5" to="/" tag={Link}>
              <NavHeader>Resumify</NavHeader>
            </NavbarBrandCustom>
            <div className="navbar-action">
              {!authenticated && 
                <ResumifyButton
                  className="y-1"
                  size="sm"
                  tag={Link}
                  to="/signup"
                  outline
                >
                  Sign up
              </ResumifyButton>
              }
              <button className="navbar-toggler" id="navbar_global">
                <span />
                <span />
                <span />
              </button>
            </div>

            
            <UncontrolledCollapse navbar toggler="#navbar_global">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <NavbarBrandCustom className="mr-lg-5" to="/" tag={Link}>
                        <NavHeader>Resumify</NavHeader>
                      </NavbarBrandCustom>
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
                        outline
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

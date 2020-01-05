/**
 *
 * Alert
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { UncontrolledAlert } from 'reactstrap';
import { fadeIn } from 'styles/animation';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


const AlertWrapper = styled.div`
  max-width: 25rem;
  min-width: 25rem;
  padding: 0 1rem;
  position: absolute;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  animation: ${fadeIn} 0.4s ease-in-out 0.08s forwards;
`;


export const Alert = ({ color, fade, children, ...props }) => {
  return (
    <AlertWrapper>
      <UncontrolledAlert style={{ display: 'flex' }} color={color} fade={fade}>
        {color === 'success' ? (
          <span className="alert-inner--icon">
            <i className="ni ni-check-bold" />
          </span>
        ) : (
          <span className="alert-inner--icon">
            <i className="ni ni-fat-remove" />
          </span>
        )}

        <span className="alert-inner--text ml-1">{children}</span>
      </UncontrolledAlert>
    </AlertWrapper>
  );
};

Alert.propTypes = {};

export default Alert;

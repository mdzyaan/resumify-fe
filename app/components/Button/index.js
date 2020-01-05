/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import ClipLoader from 'components/Loaders/ClipLoader';
import { Button as ReactButton } from 'reactstrap';

export const Button = ({ ...props }) => {
  return (
    <ReactButton {...props}>
      {props.loading ? (
        '...'
        // <ClipLoader color="white" margin="0 5px" />
      ) : (
        <>
          {props.icon && (
            <span className="btn-inner--icon mr-1">
              <i className={props.icon} />
            </span>
          )}
          <span className={props.icon && 'btn-inner--text'}>
            {props.children}
          </span>
        </>
      )}
    </ReactButton>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  outline: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  tag: PropTypes.func,
  link: PropTypes.string,
};

Button.propTypes = {
  color: 'primary',
};

export default Button;

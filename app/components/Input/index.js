/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Input as ReactstrapInput,
  InputGroup,
} from 'reactstrap';

export const Input = props => {
  return (
    <InputGroup className="input-group-alternative">
      <ReactstrapInput {...props} />
    </InputGroup>
  );
}

Input.propTypes = {};

export default Input;

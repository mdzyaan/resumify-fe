/**
 *
 * ClipLoader
 *
 */

import React from 'react';
import { ClipLoader as RSClipLoader } from 'react-spinners';
import styled from 'styled-components';
import theme from 'styles/theme';

const ThemeClipLoaderWrapper = styled.div`
  display: flex !important;
  text-align: center;
  align-items: center;
  width: 100%;
  margin: ${p => p.margin || '2rem'};
  justify-content: center;
`;

const ThemeClipLoader = styled(({ ...others }) => <RSClipLoader {...others} />)``;

export const ClipLoader = ({ wrapperClassName, ...others }) => {
  return (
    <ThemeClipLoaderWrapper className={wrapperClassName} {...others}>
      <ThemeClipLoader {...others} />
    </ThemeClipLoaderWrapper>
  );
};

ClipLoader.defaultProps = {
  sizeUnit: 'px',
  size: 20,
  color: theme.palette.primary,
};

export default ClipLoader;

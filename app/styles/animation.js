import { keyframes } from 'styled-components';

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px)
  }

  to {
    opacity: 1;
    transform: translateY(0px)
  }
`;

export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px)
  }

  to {
    opacity: 1;
    transform: translateY(0px)
  }
`;

export const rotate = keyframes`
  from  {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(0);
  }
`;

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;
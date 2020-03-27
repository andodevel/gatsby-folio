import { css } from 'styled-components';
import Theme from './Theme';

const Transition = css`
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(2rem);
    transition: opacity 300ms ${Theme.easing}, transform 300ms ${Theme.easing};
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0rem);
    transition: opacity 300ms ${Theme.easing}, transform 300ms ${Theme.easing};
  }

  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-2rem);
    transition: opacity 300ms ${Theme.easing}, transform 300ms ${Theme.easing};
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0rem);
    transition: opacity 300ms ${Theme.easing}, transform 300ms ${Theme.easing};
  }

  .fade-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${Theme.easing};
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${Theme.easing};
  }
`;

export default Transition;

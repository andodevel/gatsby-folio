import { css } from 'styled-components';

const sizes = {
  desktop: 1200,
  tablet: 768,
  phone: 480,
};

export const Media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default Media;

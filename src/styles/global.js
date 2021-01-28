import { createGlobalStyle } from 'styled-components';
import Theme from './theme';
import Media from './media';
const { colors, fontSizes, fonts } = Theme;

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    font-size: 62.5%; /* Sanitize 10px = 1rem! */
    ${Media.tablet`font-size: 40%;`}
    ${Media.phablet`font-size: 35%;`}
    ${Media.phone`font-size: 32.5%;`}
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.primaryBackground};
    color: ${colors.primaryForeground};
    line-height: ${Theme.contentLineHeight};
    font-family: ${fonts.primary};
    font-size: ${fontSizes.lg};

    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > #content > * {
        filter: blur(0.5rem) brightness(0.7);
        transition: ${Theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${colors.primaryComponent};
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: ${Theme.headerLineHeight};
    font-weight: 500;
  }

  h1 {
    font-size: ${fontSizes.h1};
  }

  h2 {
    font-size: ${fontSizes.h2};
  }

  h3 {
    font-size: ${fontSizes.h3};
  }

  h4 {
    font-size: ${fontSizes.h4};
  }

  h5 {
    font-size: ${fontSizes.h5};
  }

  h6 {
    font-size: ${fontSizes.h6};
  }


  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(0.5rem);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${Theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.primaryComponentActive};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${colors.primaryComponent};
    }
  }


  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`;

export default Global;

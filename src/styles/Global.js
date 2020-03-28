import { createGlobalStyle } from 'styled-components';
import Theme from './Theme';
import FontFaces from './Fonts';
import Mixins from './Mixins';
import Transition from './Transition';
const { colors, fontSizes, fonts } = Theme;

const Global = createGlobalStyle`
  ${FontFaces};

  html {
    box-sizing: border-box;
    width: 100%;
    font-size: 62.5%; /* Sanitize 10px = 1rem! */
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
    background-color: ${colors.navy};
    color: ${colors.slate};
    line-height: 1.3;
    font-family: ${fonts.Hack};
    font-size: ${fontSizes.xl};

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
    background-color: ${colors.highlight};
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
    font-weight: 600;
    color: ${colors.lightestSlate};
    margin: 0 0 1rem 0;
  }

  h1 {
    &.big-title {
      font-size: 8rem;
      line-height: 1.1;
      margin: 0;
    }

    &.medium-title {
      font-size: 6rem;
      line-height: 1.1;
      margin: 0;
    }
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
      color: ${colors.green};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${colors.blue};
    }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 1.5rem 0;

    & > a {
      ${Mixins.inlineLink};
    }

    & > code {
      background-color: ${colors.lightNavy};
      color: ${colors.offWhite};
      font-size: ${fontSizes.sm};
      border-radius: ${Theme.borderRadius};
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: ${fontSizes.lg};
      li {
        position: relative;
        padding-left: 3rem;
        margin-bottom: 1rem;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: ${colors.green};
        }
      }
    }
  }

  blockquote {
    border-left-color: ${colors.green};
    border-left-style: solid;
    border-left-width: 0.1rm;
    margin-left: 0rem;
    margin-right: 0rem;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 2.4rem;
    }
  }

  hr {
    background-color: ${colors.darkGrey};
    height: 0.1rem;
    border-width: 0rem;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: ${fonts.Monofur};
    font-size: ${fontSizes.md};
  }

  .overline {
    color: ${colors.green};
    font-family: ${fonts.Monofur};
    font-size: ${fontSizes.md};
    font-weight: normal;
  }

  .subtitle {
    color: ${colors.green};
    margin: 0 0 2rem 0;
    font-size: ${fontSizes.md};
    font-family: ${fonts.Monofur};
    font-weight: normal;
    line-height: 1.5;
    a {
      ${Mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 5rem;
    color: ${colors.green};

    .arrow {
      display: block;
      margin-right: 1rem;
      padding-top: 0.4rem;
    }
    a {
      ${Mixins.inlineLink};
      font-family: ${fonts.Monofur};
      font-size: ${fontSizes.sm};
      font-weight: bold;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  ${Transition};
`;

export default Global;

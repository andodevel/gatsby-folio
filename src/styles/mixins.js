import { css } from 'styled-components';
import Theme from './theme';
import Media from './media';
const { colors, fontSizes, fonts } = Theme;

const Mixins = {
  flexStart: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  centerScreen: css`
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    text-align: justify;
    text-align-last: center;
    ${Media.tablet`text-align: inherit;`}
    ${Media.tablet`text-align-last: inherit;`}
  `,

  outline: css`
    outline: 0.1rem solid red;
  `,

  ul: css`
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      position: relative;
      padding-left: 3rem;
      margin-bottom: 1rem;
      &:before {
        content: '⟢';
        position: absolute;
        left: 0;
        color: ${colors.indicator};
      }
    }
  `,

  tabButton: css`
    background-color: transparent;
    height: ${Theme.tabHeight}rem;
    border: 0 !important;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: ${colors.primaryComponent};
    position: relative;
    transition: ${Theme.transition};
    padding: 0 2rem 0.2rem;
    text-align: left;
    white-space: nowrap;
    font-family: ${fonts.secondary};
    font-size: ${fontSizes.lg};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.primaryComponentActive};
      outline: 0;
    }
  `,

  tabButtonHighlight: css`
    display: block;
    background: ${colors.indicator};
    width: 0.2rem;
    height: ${Theme.tabHeight - 2.4}rem;
    border-radius: ${Theme.borderRadius};
    position: absolute;
    top: 1.1rem;
    left: 0;
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0.1s;
    z-index: 5;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${Theme.transition};
    cursor: pointer;
    color: ${colors.link};
    &:hover {
      color: ${colors.linkActive};
      font-weight: 600 !important;
      outline: 0;
      &:after {
        width: 80%;
      }
      & > * {
        color: ${colors.linkActive} !important;
        font-weight: 600 !important;
        transition: ${Theme.transition};
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 0.2rem;
      position: relative;
      left: 1rem;
      bottom: -0.1rem;
      background-color: ${colors.linkActive};
      transition: ${Theme.transition};
      opacity: 0.4;
    }
  `,

  button: css`
    border: 1px solid ${colors.button};
    color: ${colors.button};
    background-color: transparent;
    border-radius: ${Theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-family: ${fonts.secondary};
    line-height: ${Theme.contentLineHeight};
    text-decoration: none;
    cursor: pointer;
    transition: ${Theme.transition};
    &:hover,
    &:focus,
    &:active {
      border: 1px solid ${colors.primaryBackground};
      color: ${colors.primaryBackground};
      background-color: ${colors.buttonActive};
      box-shadow: 0 0.5rem 1rem -0.5rem ${colors.buttonActive};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 15rem;
    ${Media.tablet`padding: 5rem;`}
    ${Media.phablet`padding: 3rem;`}
  `,

  boxShadow: css`
    box-shadow: 0 0.2rem 0.4rem -0.2rem ${colors.primaryShadow};
    transition: ${Theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 0.5rem 1rem -0.5rem ${colors.primaryShadow};
    }
  `,
};

export default Mixins;

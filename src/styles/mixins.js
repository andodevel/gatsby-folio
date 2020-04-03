import { css } from 'styled-components';
import Theme from './theme';
const { colors, fonts } = Theme;

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

  fullScreen: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
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
    border: 0 !important;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${Theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${colors.primaryComponentActive};
      outline: 0;
    }
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
      outline: 0;
      &:after {
        width: 50%;
      }
      & > * {
        color: ${colors.linkActive} !important;
        transition: ${Theme.transition};
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 0.2rem;
      position: relative;
      left: 2rem;
      bottom: -0.2rem;
      background-color: ${colors.linkActive};
      transition: ${Theme.transition};
      opacity: 0.8;
    }
  `,

  button: css`
    border: 1px solid ${colors.button};
    color: ${colors.button};
    background-color: transparent;
    border-radius: ${Theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-family: ${fonts.secondary};
    line-height: 1;
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

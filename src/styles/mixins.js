import { css } from 'styled-components';
import Theme from './theme';
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

  outline: css`
    outline: 0.1rem solid red;
  `,

  ul: css`
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
        color: ${colors.component};
      }
    }
  `,

  tabButton: css`
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
      color: ${colors.component};
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
      color: ${colors.link};
      outline: 0;
      &:after {
        width: 50%;
      }
      & > * {
        color: ${colors.link} !important;
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
      background-color: ${colors.link};
      transition: ${Theme.transition};
      opacity: 0.8;
    }
  `,

  bigButton: css`
    border: 1px solid ${colors.button};
    color: ${colors.buttonTxt};
    background-color: transparent;
    border-radius: ${Theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${fontSizes.sm};
    font-family: ${fonts.secondary};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${Theme.transition};
    &:hover,
    &:focus,
    &:active {
      border: 1px solid ${colors.buttonActive};
      color: ${colors.buttonActiveTxt};
      background-color: ${colors.buttonActiveBg};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 15rem;
  `,

  boxShadow: css`
    box-shadow: 0 0.5rem 2rem -1rem ${colors.shadow};
    transition: ${Theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 0.8rem 2rem -1rem ${colors.shadow};
    }
  `,
};

export default Mixins;

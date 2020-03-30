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

  link: css`
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
      color: ${colors.link};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${Theme.transition};
    cursor: pointer;
    color: ${colors.link};
    &:hover,
    &:focus,
    &:active {
      color: ${colors.link};
      outline: 0;
      &:after {
        width: 100%;
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
      height: 0.1rem;
      position: relative;
      bottom: 0.37em;
      background-color: ${colors.link};
      transition: ${Theme.transition};
      opacity: 0.5;
    }
  `,

  smallButton: css`
    color: ${colors.component};
    background-color: transparent;
    border: 0.1rem solid ${colors.component};
    border-radius: ${Theme.borderRadius};
    padding: 0.75rem 1rem;
    font-size: ${fontSizes.smish};
    font-family: ${fonts.secondary};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${Theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.component};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${colors.component};
    background-color: transparent;
    border: 0.1rem solid ${colors.component};
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
      background-color: ${colors.component};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 15rem;
  `,

  boxShadow: css`
    box-shadow: 0 1rem 3rem -1.5rem ${colors.shadow};
    transition: ${Theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 2rem 3rem -1.5rem ${colors.shadow};
    }
  `,

  fancyList: css`
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
};

export default Mixins;

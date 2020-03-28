import styled from 'styled-components';
import Theme from './theme';
const { colors } = Theme;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${Theme.transition};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${colors.component};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${colors.component};
    transition: ${Theme.transition};
  }
`;

export default Link;

import styled from 'styled-components';
import Theme from './theme';
const { colors, fontSizes, fonts } = Theme;

const Button = styled.button`
  color: ${colors.green};
  background-color: transparent;
  border: 1px solid ${colors.component};
  border-radius: ${Theme.borderRadius};
  font-size: ${fontSizes.smish};
  font-family: ${fonts.secondary};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${Theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.component};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;

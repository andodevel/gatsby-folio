import styled from 'styled-components';
import Theme from './Theme';
const { colors, fontSizes, fonts } = Theme;

const Button = styled.button`
  color: ${colors.green};
  background-color: transparent;
  border: 0.1rem solid ${colors.component};
  border-radius: ${Theme.borderRadius};
  font-size: ${fontSizes.smish};
  font-family: ${fonts.SFMono};
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

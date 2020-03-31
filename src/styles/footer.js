import styled from 'styled-components';
import Theme from './theme';

const { colors } = Theme;

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${colors.footerBackground};
  font-size: 1.3rem;
  z-index: 10;
`;

export default Footer;

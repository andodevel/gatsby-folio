import styled from 'styled-components';
import Theme from './theme';
import Bar from './bar';

const { colors } = Theme;

const Footer = styled.footer`
  ${Bar};
  bottom: 0;
  box-shadow: 0 -0.3rem 0.5rem -0.3rem ${colors.secondaryShadow};
`;

export default Footer;

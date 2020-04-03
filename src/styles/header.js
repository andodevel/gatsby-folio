import styled from 'styled-components';
import Theme from './theme';
import Bar from './bar';

const { colors } = Theme;

const Header = styled.footer`
  ${Bar};
  top: 0;
  box-shadow: 0 0.3rem 0.5rem -0.3rem ${colors.secondaryBackground};
`;

export default Header;

import { css } from 'styled-components';
import Theme from './theme';
import Mixins from './mixins';

const { colors, fonts, fontSizes } = Theme;

const Bar = css`
  ${Mixins.flexBetween};
  position: fixed;
  left: 0;
  padding: 0 2rem;
  width: 100%;
  z-index: 10;
  text-align: center;
  height: auto;
  min-height: 4rem;
  background-color: ${colors.secondaryBackground};
  font-family: ${fonts.secondary};
  font-size: ${fontSizes.sm};
  line-height: 1;
`;

export default Bar;

import Colors from './colors';
import Fonts from './fonts';

const Theme = {
  colors: {
    background: `${Colors.orange1}`,
    text: `${Colors.fg}`,
    component: `${Colors.green1}`,
    shadow: `${Colors.bg4}`,
    headerBackground: `${Colors.bg}`,
  },

  fonts: {
    primary: `${Fonts.HackMono}`,
    secondary: `${Fonts.MonofurMono}`,
  },

  fontSizes: {
    xs: '1.2rem',
    smish: '1.3rem',
    sm: '1.4rem',
    md: '1.6rem',
    lg: '1.8rem',
    xl: '2.0rem',
    xxl: '2.2rem',
    h3: '3.2rem',
    h2: '4.2rem',
    h1: '5.2rem',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '0.3rem',
  margin: '2.0rem',

  tabHeight: '4.2rem',
  tabWidth: '12.0rem',
  radius: '0.3rem',
};

export default Theme;

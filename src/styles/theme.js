import Colors from './colors';
import Fonts from './fonts';

const Theme = {
  colors: {
    // 404
    errPage: `${Colors.orange1}`,

    // Button
    button: `${Colors.orange1}`,
    buttonActive: `${Colors.orange2}`,

    // Link
    link: `${Colors.blue1}`,
    linkActive: `${Colors.aqua1}`,

    // Background
    primaryBackground: `${Colors.bg}`,
    secondaryBackground: `${Colors.bg1}`,

    // Section
    sectionHeading: `${Colors.blue1}`,

    // shadow
    primaryShadow: `${Colors.orange2}`,
    secondaryShadow: `${Colors.bg1}`,

    primary: `${Colors.fg0}`,
    text: `${Colors.fg}`,
    component: `${Colors.orange1}`,
    component2: `${Colors.blue1}`,
    component3: `${Colors.purple1}`,
    component4: `${Colors.green1}`,
    component5: `${Colors.red1}`,
    component6: `${Colors.orange1}`,
    component7: `${Colors.fg0}`,
  },

  width: {
    fullDescription: '70%',
    maxFullDescription: '90rem',
  },

  fonts: {
    primary: `${Fonts.Hack}`,
    secondary: `${Fonts.Monofur}`,
  },

  fontSizes: {
    xs: '1.2rem',
    smish: '1.3rem',
    sm: '1.4rem',
    md: '1.6rem',
    lg: '1.8rem',
    xl: '2.0rem',
    xxl: '2.2rem',
    h6: '2.4rem',
    h5: '2.8rem',
    h4: '3.2rem',
    h3: '4.2rem',
    h2: '6rem',
    h1: '8rem',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  radius: '5px',
  borderRadius: '5px',
  margin: '2.0rem',

  tabHeight: '4.2', // rem
  tabWidth: '1.2', // rem
};

export default Theme;

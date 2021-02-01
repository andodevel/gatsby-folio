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

    // Shadow
    primaryShadow: `${Colors.orange2}`,
    secondaryShadow: `${Colors.bg1}`,

    // Content
    primaryForeground: `${Colors.fg0}`,
    secondaryForeground: `${Colors.fg1}`,

    // Component
    primaryComponent: `${Colors.orange1}`,
    primaryComponentActive: `${Colors.orange2}`,
    secondaryComponent: `${Colors.blue1}`,
    secondaryComponentActive: `${Colors.blue2}`,
    indicator: `${Colors.red1}`,
  },

  fonts: {
    primary: `${Fonts.SourceSansPro}`,
    secondary: `${Fonts.RobotoCondensed}`,
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

  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  transitionDelay: '0.05s',

  borderRadius: '3px',

  tabHeight: '4.2', // rem
  tabWidth: '1.2', // rem

  contentLineHeight: 1.6,
  headerLineHeight: 1.1,
};

export default Theme;

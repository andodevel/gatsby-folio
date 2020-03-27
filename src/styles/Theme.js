import Colors from './Colors'

const Theme = {
  colors: {
    background: `${Colors.orange1}`,
    text: `${Colors.fg}`,
    component: `${Colors.green1}`,
    shadow: `${Colors.bg4}`,
    headerBackground: `${Colors.bg}`,
  },

  fonts: {
    Hack:'Hack, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif',
    HackMono:'Hack Mono, Roboto Mono, monospace',
    Monofur: 'Monofur, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif',
    MonofurMono: 'Monofur Mono, Roboto Mono, monospace',
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
  navHeight: '10.0rem',
  navScrollHeight: '7.0rem',
  margin: '2.0rem',

  tabHeight: '4.2rem',
  tabWidth: '12.0rem',
  radius: '0.3rem',

  hamWidth: '3.0rem',
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default Theme;

import color from 'color';

const gray = color('#77797B').string();
const white = color('#e8e8e8').string();
const pink = color('#efafe7').string();
const orange = color('#e4b660').string();
const black = color('#23282c').string();
const green = color('#2b9a81').string();
const blackHighlight = color('rgba(17, 20, 21, .2)').string();

const greenLight10 = color(green).lighten(0.1).string();
const lightGray = color(gray).lighten(1.0).string();
const darkGray = color(gray).darken(0.2).string();
const whiteDark10 = color(white).darken(0.1).string();
const whiteDark20 = color(white).darken(0.2).string();
const cursorGreen = color('rgba(43, 154, 129, .75)').string();

// Colours
export const colors = {
  white,
  whiteDark10,
  whiteDark20,
  gray,
  darkGray,
  lightGray,
  black,
  blackHighlight,
  green,
  greenLight10,
  cursorGreen,
  pink,
  orange
};

// Typography
export const type = {
  tera: '84px',
  giga: '62px',
  mega: '48px',
  alpha: '38px',
  beta: '26px',
  gamma: '20px',
  delta: '16px',
  epsilon: '14px',
  zeta: '12px',

  fontRegular: 'normal',
  fontBold: 'bold',
  fontMono: 'iosevka, monospace',
  fontSans: 'apercu, sans-serif',

  bodySize: '18px',
  bodyWeight: 'normal'
};

// Layout
export const layout = {
  gutter: '20px',
  maxWidth: '1440px'
};

// Breakpoints
export const breakpoint = {
  large: '@media screen and (min-width: 1100px)',
  medium: '@media screen and (min-width: 800px) and (min-width: 1099px)',
  small: '@media screen and (min-width: 600px) and (max-width: 799px)',
};

// Navigation Items
export const nav = ['about', 'work', 'contact'];

export const GAID = 'UA-30900799-1';

const vars = {
  colors,
  type,
  layout,
  breakpoint,
  nav
};

export default vars;

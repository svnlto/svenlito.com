import { lightness, color as co } from 'kewler';

const black = co('#23282c');
const green = co('#2b9a81');
const greenLight10 = green(lightness(10));
const gray = co('#77797B');
const grayLight10 = gray(lightness(10));
const grayDark10 = gray(lightness(-20));
const white = co('#e8e8e8');
const whiteDark10 = white(lightness(-10));
const pink = co('#efafe7');
const orange = co('#e4b660');

// Colours
export const color = {
  white: white(),
  whiteDark10: whiteDark10(),
  gray: gray(),
  darkGray: grayDark10(),
  lightGray: grayLight10(),
  black: black(),
  green: green(),
  greenLight10: greenLight10(),
  blackVar: 'rgba(54,54,54,.2)',
  pink: pink(),
  orange: orange()
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
  fontMono: 'Inconsolata, monospace',
  fontSans: 'apercu, sans-serif',

  bodySize: '18px',
  bodyWeight: 'normal'
};

// TODO: Layout  - maybe remove this...
export const layout = {
  gutter: '20px',
  maxWidth: '1440px'
};

// Breakpoints
export const breakpoint = {
  large: '@media screen and (min-width: 1439px)',
  medium: '@media screen and (min-width: 800px) and (min-width: 1099px)',
  small: '@media screen and (min-width: 600px) and (max-width: 799px)',
};

// Navigation Items
export const nav = ['work', 'contact'];

const vars = {
  color,
  type,
  layout,
  breakpoint,
  nav
};

export default vars;

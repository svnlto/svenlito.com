var color = require('color');

module.exports = {
  gray: '#77797B',
  white: '#e8e8e8',
  pink: '#efafe7',
  orange: '#e4b660',
  black: '#23282c',
  green: '#2b9a81',
  blackHighlight: 'rgba(17, 20, 21, .2)',
  cursorGreen: 'rgba(43, 154, 129, .75)',
  greenLight10: color('#2b9a81')
    .lighten(0.1)
    .string(),
  lightGray: color('#77797B')
    .lighten(1.0)
    .string(),
  darkGray: color('#e8e8e8')
    .darken(0.2)
    .string(),
  whiteDark10: color('#e8e8e8')
    .darken(0.1)
    .string(),
  whiteDark20: color('#e8e8e8')
    .darken(0.2)
    .string(),
  whiteDark40: color('#e8e8e8')
    .darken(0.4)
    .string(),
  tera: '64px',
  giga: '56px',
  mega: '48px',
  alpha: '40px',
  beta: '32px',
  gamma: '24px',
  delta: '16px',
  epsilon: '12px',
  zeta: '8px',
  fontMono: 'iosevka, monospace',
  fontSans: 'apercu, sans-serif'
};

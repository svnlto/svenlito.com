var color = require('color');

module.exports = {
  gray: color('#77797B').string(),
  white: color('#e8e8e8').string(),
  pink: color('#efafe7').string(),
  orange: color('#e4b660').string(),
  black: color('#23282c').string(),
  green: color('#2b9a81').string(),
  blackHighlight: color('rgba(17, 20, 21, .2)').string(),
  cursorGreen: color('rgba(43, 154, 129, .75)').string(),
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
  tera: '64px',
  giga: '56px',
  mega: '48px',
  alpha: '40px',
  beta: '32px',
  gamma: '24px',
  delta: '16px',
  epsilon: '8px',
  zeta: '12px',
  fontMono: 'iosevka, monospace',
  fontSans: 'apercu, sans-serif'
};

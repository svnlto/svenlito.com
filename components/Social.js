import React from 'react';

import { colors, type } from '../constants';

const styles = {
  link: {
    fontSize: type.zeta,
    display: 'inline-block',
    marginRight: '10px',
    color: colors.gray,
  },

  anchor: {
    border: 'none'
  }
};

const Social = () => (
  <ul>
    <li style={styles.link}><a style={styles.anchor} href='/contact'>email</a></li>
    <li style={styles.link}><a style={styles.anchor} href='http://github.com/svnlto'>github</a></li>
    <li style={styles.link}><a style={styles.anchor} href='http://twitter.com/svenlito'>twitter</a></li>
  </ul>
);

export default Social;

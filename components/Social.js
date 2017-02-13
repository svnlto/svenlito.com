import React from 'react';

import { colors, type } from '../constants';

const styles = {
  link: {
    fontSize: type.zeta,
    display: 'inline-block',
    marginRight: '10px',
    color: colors.gray
  }
};

const Social = () => (
  <ul>
    <li style={styles.link}><a href='/contact'>email</a></li>
    <li style={styles.link}><a href='http://github.com/svnlto'>github</a></li>
    <li style={styles.link}><a href='http://twitter.com/svenlito'>twitter</a></li>
  </ul>
);

export default Social;

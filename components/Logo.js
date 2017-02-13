import React from 'react';
import Radium from 'radium';
import Isvg from 'react-inlinesvg';

import Link from './Link';

const styles = {
  logo: {
    border: 'none'
  }
};

const Logo = () => {
  const logo = '';
  return (
    <Link style={styles.logo} href='/'>
      <Isvg src={logo} />
    </Link>
  );
};

export default Radium(Logo);


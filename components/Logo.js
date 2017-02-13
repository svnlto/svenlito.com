import React from 'react';
import { IndexLink } from 'react-router';
import Radium from 'radium';
import Isvg from 'react-inlinesvg';

const styles = {
  logo: {
    border: 'none'
  }
};

const Logo = () => {
  const logo = '';
  return (
    <IndexLink style={styles.logo} to='/'>
      <Isvg src={logo} />
    </IndexLink>
  );
};

export default new Radium(Logo);


import React from 'react';
import Radium from 'radium';

import Link from './Link';

import { colors } from '../constants';

const styles = {
  logo: {
    border: 'none'
  }
};

const Logo = () => {
  return (
    <Link style={styles.logo} href='/'>
      <svg width='50px' height='50px' viewBox='0 0 50 50' version='1.1'>
        <defs>
          <rect id='path-1' x='30' y='30' width='35' height='35' />
          <rect id='path-3' x='15' y='15' width='40' height='40' />
          <rect id='path-5' x='0' y='0' width='50' height='50' />
        </defs>
        <use stroke={colors.greenLight10} strokeWidth='1' fill='none' opacity='0.55' xlinkHref='#path-1' />
        <use stroke={colors.greenLight10} strokeWidth='1' fill='none' opacity='0.6' xlinkHref='#path-3' />
        <use stroke={colors.greenLight10} strokeWidth='1' fill='none' opacity='0.9' xlinkHref='#path-5' />
      </svg>
    </Link>
  );
};

export default Radium(Logo);


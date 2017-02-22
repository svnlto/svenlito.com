import React, { Component } from 'react';
import Radium from 'radium';

import Link from './Link';

const styles = {
  logo: {
    border: 'none'
  }
};

// const increment = (step, speed) => step + speed;

class Logo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gradient: {
        from: 'rgb(43, 154, 129)',
        to: 'rgb(239, 175, 231)'
      }
    };
  }

  render() {
    const { gradient } = this.state;

    return (
      <Link style={styles.logo} href='/'>
        <svg width='50px' height='50px' viewBox='0 0 50 50' version='1.1'>
          <defs>
            <linearGradient x1='21%' y1='33%' x2='19%' y2='76%' id='gradient'>
              <stop offset='5%' stopColor={gradient.from} />
              <stop offset='95%' stopColor={gradient.to} />
            </linearGradient>
            <rect id='path-1' x='30' y='30' width='35' height='35' />
            <rect id='path-3' x='15' y='15' width='40' height='40' />
            <rect id='path-5' x='0' y='0' width='50' height='50' />
          </defs>
          <use stroke={"url('#gradient')"} strokeWidth='1' fill='#23282c' xlinkHref='#path-1' />
          <use stroke={"url('#gradient')"} strokeWidth='1' fill='none' xlinkHref='#path-3' />
          <use stroke={"url('#gradient')"} strokeWidth='2' fill='none' xlinkHref='#path-5' />
        </svg>
      </Link>
    );
  }

}

export default Radium(Logo);


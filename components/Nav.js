import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import Link from './Link';

import { nav, breakpoint } from '../constants';

const styles = {
  nav: {
    justifyContent: 'flex-end'
  },
  link: {
    marginLeft: '10px',
    display: 'inline',

    [breakpoint.medium]: {
      marginLeft: '20px'
    }
  },
  inner: {
    borderBottom: 'none',
    textTransform: 'capitalize'
  },
  active: {
    borderBottom: '1px solid'
  }
};

class Nav extends Component {
  render() {
    const { path } = this.props;
    return (
      <nav style={styles.nav}>
        <span style={styles.link}>
          <Link
            style={
              Object.assign({},
                styles.inner,
                path === '/work' && styles.active
              )}
            href='/work'
          >Work</Link>
        </span>
        <span style={styles.link}>
          <Link
            style={
              Object.assign({},
                styles.inner,
                path === '/contact' && styles.active
              )}
            href='/contact'
          >Contact</Link>
        </span>
      </nav>
    );
  }
}

Nav.propTypes = {
  path: PropTypes.string.isRequired
};

export default Radium(Nav);

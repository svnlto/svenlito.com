import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import { nav, breakpoint } from '../vars';

const styles = {
  nav: {
    justifyContent: 'flex-end'
  },
  link: {
    marginLeft: '10px',

    [breakpoint.medium]: {
      marginLeft: '20px'
    }
  },
  inner: {
    borderBottom: 'none',
    textTransform: 'capitalize'
  }
};

const Nav = () => {
  const active = { borderBottom: '1px solid' };

  const renderNav = (navItems) => {
    return navItems.map((item, index) => {
      return (
        <span style={styles.link} key={index}>
          <Link
            style={styles.inner}
            to={`/${item}`}
            activeStyle={active}
          >{item}</Link>
        </span>
      );
    });
  };

  return (
    <nav style={styles.nav}>
      {renderNav(nav)}
    </nav>
  );
};

export default new Radium(Nav);

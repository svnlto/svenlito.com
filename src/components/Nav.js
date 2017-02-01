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

const Nav = () => {

  const renderNav = (navItems) => {
    return navItems.map((item, index) => (
      <li style={styles.link} key={index}>
        <Link
          style={styles.inner}
          to={`/${item}`}
          activeStyle={styles.active}
        >{item}</Link>
      </li>
    ));
  };

  return (
    <nav style={styles.nav}>
      <ul>
        {renderNav(nav)}
      </ul>
    </nav>
  );
};

export default new Radium(Nav);

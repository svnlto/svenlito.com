import React, { PropTypes } from 'react';
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

const Nav = ({ path }) => {
  const renderNav = (navItems) => {
    return navItems.map((item, index) => {
      return (
        <li style={styles.link} key={index}>
          <Link
            href={`/${item}`}
            style={
              Object.assign({},
                styles.inner,
                path === `/${item}` && styles.active
            )}
          >{item}</Link>
        </li>
      );
    });
  };

  return (
    <nav style={styles.nav}>
      <ul>
        {renderNav(nav)}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  path: PropTypes.string.isRequired
};

export default Radium(Nav);

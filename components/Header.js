import React, { PropTypes } from 'react';
import Radium from 'radium';

import Logo from './Logo';
import Container from './Container';
import Column from './Column';

import Nav from './Nav';
import { type, colors } from '../constants';

const blinkKeyframes = Radium.keyframes({
  '0%': { opacity: 1.0 },
  '25%': { opacity: 0.0 },
  '50%': { opacity: 0.0 },
  '75%': { opacity: 0.0 },
  '80%': { opacity: 0.5 },
  '90%': { opacity: 0.8 },
  '100%': { opacity: 1.0 },
}, 'blink');

const styles = {
  header: {
    width: '100%',
    margin: 'auto',
    paddingTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  heading: {
    fontWeight: '500',
    color: colors.greenLight10
  },
  typist: {
    animation: 'blink 1s linear 4s infinite',
    animationName: blinkKeyframes,
  },
  inner: {
    borderBottom: 'none'
  },
  writer: {
    fontSize: type.alpha,
    color: colors.greenLight10
  }
};

const Header = (props) => (
  <Container>
    <Column width='full'>
      <header style={styles.header}>
        <Logo />
        <Nav path={props.path} />
      </header>
    </Column>
  </Container>
);

Header.propTypes = {
  path: PropTypes.string
};

export default Radium(Header);

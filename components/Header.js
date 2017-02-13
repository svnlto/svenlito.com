import React, { PropTypes } from 'react';
import Radium from 'radium';
import TypeWriter from 'react-typewriter';
import Link from 'next/prefetch';

import Container from './Container';
import Column from './Column';

import Nav from './Nav';
import { type, colors } from '../vars';

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
    fontWeight: 'lighter',
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
        <Link href={'/'}>
          <a href={'/'} style={styles.inner}>
            <h1 style={styles.heading}>{'>'}
              <TypeWriter style={styles.writer} typing={0}>Sven Lito</TypeWriter>
              <span style={styles.typist}>{'_'}</span>
            </h1>
          </a>
        </Link>
        <Nav path={props.path} />
      </header>
    </Column>
  </Container>
);

Header.propTypes = {
  path: PropTypes.string
};

export default Radium(Header);

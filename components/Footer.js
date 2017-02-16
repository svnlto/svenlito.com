import React, { Component } from 'react';

import { colors, type } from '../constants';

import Container from './Container';
import Column from './Column';
import Social from './Social';

const styles = {
  legal: {
    fontSize: type.zeta,
    color: colors.gray
  },
  footer: {
    width: '100%',
    margin: 'auto',
    paddingTop: '20px',
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
};

class Footer extends Component {
  render() {
    const today = new Date();
    const year = today.getFullYear();

    return (
      <Container>
        <Column width={'full'}>
          <footer style={styles.footer}>
            <div style={styles.legal}>{`${year} © SvenLito Software Ltd.`}</div>
            <Social />
          </footer>
        </Column>
      </Container>
    );
  }
}


export default Footer;

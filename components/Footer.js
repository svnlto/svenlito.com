import React, { Component } from 'react';

import { type } from '../constants';

import Container from '../components/Container';
import Column from '../components/Column';

const styles = {
  legal: {
    fontSize: type.zeta,
  }
};

class Footer extends Component {
  render() {
    const today = new Date();
    const year = today.getFullYear();

    return (
      <Container>
        <Column width={'full'}>
          <div style={styles.legal}>{`${year} © SvenLito Software Ltd.`}</div>
        </Column>
      </Container>
    );
  }
}


export default Footer;

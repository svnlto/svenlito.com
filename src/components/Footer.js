import React, { Component } from 'react';
import Radium from 'radium';

import { type } from '../vars';

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


export default new Radium(Footer);

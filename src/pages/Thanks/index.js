import React, { Component } from 'react';

import { colors } from '../../vars';

import Hero from '../../components/Hero';
import Container from '../../components/Container';
import Column from '../../components/Column';

class Thanks extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: colors.black,
        secondary: colors.white
      }
    };
    document.body.style.backgroundColor = this.state.theme.primary;
    document.body.style.color = this.state.theme.secondary;
  }

  render() {
    return (
      <div>
        <Hero headline='Thanks for getting in touch!' />
        <Container>
          <Column title='I’ll be sure to reply as soon as possible.' />
        </Container>
      </div>
    );
  }
}

export default Thanks;

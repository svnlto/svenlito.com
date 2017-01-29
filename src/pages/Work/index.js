import React, { Component } from 'react';

import { colors } from '../../vars';

import Container from '../../components/Container';
import Column from '../../components/Column';
import Timeline from '../../components/Timeline';
import Hero from '../../components/Hero';

class Work extends Component {

  componentWillMount() {
    this.state = {
      theme: {
        primary: colors.black,
        secondary: colors.whiteDark10
      }
    };
    document.body.style.backgroundColor = this.state.theme.primary;
    document.body.style.color = this.state.theme.secondary;
  }

  render() {
    return (
      <div>
        <Container>
          <Column width='full'>
            <Hero
              keywords={['design', 'deliver', 'adapt']}
              headline='I have helped clients design, adapt and deliver projects
              through real-time communications, memory forensics, containerisation,
              application architecture and mobile platforms.'
            />
            <Timeline />
          </Column>
        </Container>
      </div>
    );
  }
}

export default Work;

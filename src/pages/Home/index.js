import React, { Component } from 'react';

import { colors } from '../../vars';

import Container from '../../components/Container';
import Column from '../../components/Column';
import Hero from '../../components/Hero';

class Home extends Component {

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
              headline="Hi, I'm Sven, a Freelance Full-Stack JavaScript
              Developer with a passion for Digital Arts, Distributed Systems
              and Functional Programming. I am an expert in creating experiences
              for screen and mobile."
              keywords={[
                'Functional Programming',
                'Full-Stack JavaScript Developer',
                'Digital Arts',
                'Distributed Systems'
              ]}
              link='/contact'
              text='Available for freelance work'
            />
          </Column>
        </Container>
      </div>
    );
  }
}

export default Home;

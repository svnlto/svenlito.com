import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Container from '../../components/Container';
import Column from '../../components/Column';
import Hero from '../../components/Hero';

class Home extends Component {

  componentWillMount() {
    document.body.style.backgroundColor = this.props.theme.primary;
    document.body.style.color = this.props.theme.secondary;
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
                'Distributed Systems',
                'creating experiences'
              ]}
              link='/contact'
              text='Talk to me'
            />
          </Column>
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

const select = (state) => {
  const theme = state.app.theme;
  return { theme };
};

export default connect(select)(Home);

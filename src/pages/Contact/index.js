import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Container from '../../components/Container';
import Column from '../../components/Column';

import Hero from '../../components/Hero';
import ContactForm from '../../components/ContactForm';

class Contact extends Component {

  componentWillMount() {
    document.body.style.backgroundColor = this.props.theme.primary;
    document.body.style.color = this.props.theme.secondary;
  }

  render() {
    return (
      <div>
        <Container>
          <Column width='full'>
            <Hero headline='Drop me a line.' />
            <Container>
              <Column
                width={'half'}
                title="Let's talk about your project or just send me a hello."
              />
              <Column width='half'>
                <ContactForm color='white' />
              </Column>
            </Container>
          </Column>
        </Container>
      </div>
    );
  }
}

Contact.propTypes = {
  theme: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const select = (state) => {
  const theme = state.app.theme;
  return { theme };
};

export default connect(select)(Contact);

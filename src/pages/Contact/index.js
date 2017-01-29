import React, { Component } from 'react';

import { colors } from '../../vars';

import Hero from '../../components/Hero';
import ContactForm from '../../components/ContactForm';

import Container from '../../components/Container';
import Column from '../../components/Column';

class Contact extends Component {

  componentWillMount() {
    this.state = {
      theme: {
        primary: colors.white,
        secondary: colors.black
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
            <Hero headline='Talk to me.' />
            <Container>
              <Column
                width='half'
                title='Get in touch about your project or just say hello.'
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

export default Contact;

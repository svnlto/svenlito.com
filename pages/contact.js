import React from 'react';

import Page from '../components/Page';
import Container from '../components/Container';
import Column from '../components/Column';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const Contact = () => {
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
};

export default Page(Contact);

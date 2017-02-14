import React from 'react';

import Page from '../components/Page';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Column from '../components/Column';

const About = () => {

  return (
    <Container>
      <Column width='full'>
        <Hero headline='Stay tuned.' />
        <Container>
          <Column title='This is coming soon.' />
        </Container>
      </Column>
    </Container>
  );
};

export default Page(About);

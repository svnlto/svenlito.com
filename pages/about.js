import React from 'react';

import Page from '../components/Page';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Column from '../components/Column';

const About = () => {

  return (
    <div>
      <Hero headline='Stay tuned.' />
      <Container>
        <Column title='This is coming soon.' />
      </Container>
    </div>
  );
};

export default Page(About);

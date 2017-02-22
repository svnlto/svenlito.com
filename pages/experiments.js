import React from 'react';

import Page from '../components/Page';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Column from '../components/Column';

const Experiments = () => (
  <Container>
    <Column width='full'>
      <Hero headline='Stay tuned.' />
    </Column>
  </Container>
);

export default Page(Experiments);

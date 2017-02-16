import React from 'react';

import Page from '../components/Page';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Column from '../components/Column';

const NotFound = () => (
  <Container>
    <Column width='full'>
      <Hero headline='Oupsie!' />
      <Container>
        <Column title='Not found what you were looking for?' />
      </Container>
    </Column>
  </Container>
);

export default Page(NotFound);

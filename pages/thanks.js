import React from 'react';

import Page from '../components/Page';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Column from '../components/Column';

const Thanks = () => {

  return (
    <div>
      <Hero headline='Thanks for getting in touch!' />
      <Container>
        <Column title="I'll make sure to reply as soon as possible." />
      </Container>
    </div>
  );
};

export default Page(Thanks);

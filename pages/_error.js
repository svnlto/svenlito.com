import React from 'react';

import Page from '../components/Page';
import AnchorLink from '../components/AnchorLink';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Column from '../components/Column';

const NotFound = () => (
  <Container>
    <Column width='full'>
      <Hero headline='Not Found.' />
      <Container>
        <Column width='half' title='Well, this is embarrassing. Seems like something is broken.'>
          <AnchorLink text='Back to square one' link='/' />
        </Column>
      </Container>
    </Column>
  </Container>
);

export default Page(NotFound);

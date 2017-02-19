import React from 'react';

import Page from '../components/Page';
import Container from '../components/Container';
import Column from '../components/Column';
import Hero from '../components/Hero';

const Home = () => (
  <Container>
    <Column width='full'>
      <Hero
        headline="Hi, I'm Sven, a Freelance Full-Stack JavaScript
        Developer with a passion for Visual Arts, Distributed Systems
        and Functional Programming. I'm an expert in creating experiences
        for screen and mobile."
        keywords={[
          'Functional Programming',
          'Full-Stack JavaScript Developer',
          'Visual Arts',
          'Distributed Systems',
          'creating experiences for screen and mobile'
        ]}
        link='/contact'
        text='Talk to me'
      />
    </Column>
  </Container>
);

export default Page(Home);

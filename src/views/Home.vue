<template>
  <Container>
    <Column width='full'>
      <Hero
        :keywords='keywords'
        :headline='headline'
        :link='link'
        :text='text'
       />
    </Column>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';
import Hero from '@/components/Hero.vue';

export default {
  name: 'Home',
  components: {
    Container,
    Column,
    Hero
  },
  data() {
    return {
      keywords: [
        'Full-Stack JavaScript Developer',
        'Visual Arts',
        'Distributed Systems',
        'Functional Programming',
        'creating experiences for screen and mobile'
      ],
      headline: `Hi, I'm Sven, a Freelance Full-Stack JavaScript Developer with a passion for Visual Arts, Distributed Systems and Functional Programming. I'm an expert in creating experiences for screen and mobile.`,
      link: '/contact',
      text: 'Talk to me'
    };
  }
};
</script>

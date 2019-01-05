<template>
  <Container>
    <Column width='full'>
      <Hero headline='Thanks for getting in touch!' />
      <Container>
        <Column title="I'll make sure to reply as soon as possible." />
      </Container>
    </Column>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';
import Hero from '@/components/Hero.vue';

export default {
  name: 'Thanks',
  components: {
    Container,
    Column,
    Hero
  }
};
</script>

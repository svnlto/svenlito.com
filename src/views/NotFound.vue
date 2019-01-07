<template>
  <Container>
    <Column width='full'>
      <Hero headline='Not Found' text='Go back to square one' link='/'>
        Well, this is embarrassing. Seems like something is broken.
      </Hero>
    </Column>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue';
import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';
import Hero from '@/components/Hero.vue';

export default Vue.extend({
  name: 'Thanks',
  components: {
    Container,
    Column,
    Hero
  }
});
</script>

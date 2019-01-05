<template>
  <Container>
    <Column width='full'>
      <div class='hero'>
      <h2 class='heading' v-if="headline"> {{ headline }} </h2>
      </div>
    </Column>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';

export default {
  name: 'HeroSub',
  components: {
    Container,
    Column
  },
  props: {
    headline: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="postcss" scoped>
.heading {
  font-weight: lighter;
}

.hero {
  padding: 32px 0 0 0;
}
</style>

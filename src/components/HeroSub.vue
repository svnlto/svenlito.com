<template>
  <Container>
    <Column width='full'>
      <h2 v-if="headline"> {{ headline }} </h2>
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
h2 {
  -webkit-font-smoothing: antialiased;
  font-family: $fontSans;
  font-size: $gamma;
  line-height: 36px;
  font-weight: lighter;

  &.sm {
    font-size: $beta;
    line-height: 48px;
  }

  &.md {
    font-size: $mega;
    line-height: 72px;
  }
}
</style>

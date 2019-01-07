<template>
  <Container>
    <Column width='full'>
      <h2 v-if="headline"> {{ headline }} </h2>
    </Column>
  </Container>
</template>
<script lang="ts">
import Vue from 'vue';
import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';
export default Vue.extend({
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
});
</script>

<style lang="postcss" scoped>
h2 {
  -webkit-font-smoothing: antialiased;
  font-family: $fontSans;
  font-size: $gamma;
  line-height: 36px;
  font-weight: lighter;

  &.small {
    font-size: $beta;
    line-height: 48px;
  }

  &.medium {
    font-size: $mega;
    line-height: 72px;
  }
}
</style>

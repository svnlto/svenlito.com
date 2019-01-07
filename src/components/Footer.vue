<template>
  <Container>
    <Column width='full'>
      <footer>
        <div :class="['legal', $mq]">© {{ year }} SvenLito Software Ltd.</div>
        <Social />
      </footer>
    </Column>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue';
import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';
import Social from '@/components/Social.vue';

export default Vue.extend({
  name: 'Footer',
  components: {
    Container,
    Column,
    Social
  },
  computed: {
    year(): number {
      return new Date().getFullYear();
    }
  }
});
</script>


<style lang='postcss' scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.legal {
  color: $whiteDark40;
  font-size: $delta;

  &.small {
    font-size: $epsilon;
  }
}
</style>

<template>
<Container>
  <Column v-for="item in data" :key="item.date" width='half'>
    <h2 :class="$mq">{{ item.title }} &bull; {{item.company.name}}</h2>
    <div class="wrapper">
      <p>{{ item.company.desc }}</p>
      <p v-for="paragraph in item.desc" :key="paragraph">
        {{ paragraph }}
      </p>
      <Taglist :data='item.extras.tags' />
    </div>
  </Column>
</Container>
</template>

<script>
import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';
import Taglist from '@/components/Taglist.vue';

export default {
  name: 'Timeline',
  components: {
    Container,
    Column,
    Taglist
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
h2 {
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  background: $blackHighlight;
  font-family: $fontSans;
  font-size: $gamma;
  line-height: 36px;
  padding: 0.1em 0.3em;
  margin: 0 0 0.7em -10px;
  font-weight: lighter;
}

.wrapper {
  margin: 0 0 3em 0;
}
</style>

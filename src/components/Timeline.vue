<template>
<Container>
  <Column v-for="event in events" :key="event.id" width='half'>
    <div class="wrapper">
    <h3 :class="$mq">{{ event.title }} &bull; {{ event.companies[0].name}}</h3>
      <p>{{ event.companies[0].description }}</p>
      <VueMarkdown>{{ event.description }}</VueMarkdown>
      <Taglist :data='event.tags' />
    </div>
  </Column>
</Container>
</template>

<script lang="ts">
import Vue from 'vue';

import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';
import Taglist from '@/components/Taglist.vue';
import VueMarkdown from 'vue-markdown';

export default Vue.extend({
  name: 'Timeline',
  components: {
    Container,
    Column,
    Taglist,
    VueMarkdown
  },
  props: {
    events: {
      type: Array,
      default() {
        return [];
      }
    }
  }
});
</script>

<style lang="postcss" scoped>
h2 {
  /* display: inline-block; */
  -webkit-font-smoothing: antialiased;
  /* background: $blackHighlight; */
  font-family: $fontSans;
  font-size: $gamma;
  line-height: 36px;
  padding: 0.1em 0.3em;
  margin: 0 0 1em -10px;
  font-weight: lighter;
}

h3 {
  /* display: inline-block; */
  -webkit-font-smoothing: antialiased;
  /* border-top: 1px solid #efafe770; */
  background: $black;
  font-family: $fontSans;
  font-size: $gamma;
  line-height: 36px;
  padding: 1em 1.3em 1em .1em;
  font-weight: lighter;
}

.wrapper {
  background: $blackHighlight;
  padding: 1em;
  margin: 0 0 3em 0;
}
</style>

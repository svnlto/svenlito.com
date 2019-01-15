<template>
<Container>
  <Column v-for="event in events" :key="event.id" width='half'>
    <div class="wrapper">
    <h3 :class="[$mq, 'title']">{{ event.title }} &bull; {{ event.companies[0].name}}</h3>
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
.title {
  -webkit-font-smoothing: antialiased;
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

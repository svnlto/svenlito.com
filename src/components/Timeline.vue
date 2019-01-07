<template>
<Container>
  <Column
    v-for="edge in events.edges"
    :key="edge.node.createdAt"
    width='half'>
    <h2 :class="$mq">{{ edge.node.title }} &bull; {{ edge.node.companies[0].name}}</h2>
    <div class="wrapper">
      <p>{{ edge.node.companies[0].description }}</p>
      <VueMarkdown>{{ edge.node.description }}</VueMarkdown>
      <Taglist :data='edge.node.tags' />
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
      type: Object,
      default() {
        return {
          edges: [{
            title: {
              type: String,
              default: ''
            }
          }]
        };
      }
    }
  }
});
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
  margin: 0 0 1em -10px;
  font-weight: lighter;
}

.wrapper {
  margin: 0 0 3em 0;
}
</style>

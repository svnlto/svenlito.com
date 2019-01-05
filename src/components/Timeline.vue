<template>
<Container>
  <Column v-for="item in data" :key="item.date" width='half'>
    <h2 class='company'>{{ item.title }} &bull; {{item.company.name}}</h2>
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
.wrapper {
  color: white;
  font-size: 14px;
  margin: 0 0 3em 0;
}

.company {
  display: inline-block;
  background: rgba(17, 20, 21, 0.2);
  color: white;
  font-family: apercu, sans-serif;
  padding: 0.1em 0.3em;
  margin: 0 0 0.7em -10px;
  font-weight: lighter;
}
</style>

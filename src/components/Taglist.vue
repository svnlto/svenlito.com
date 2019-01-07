<template>
  <ul>
    <li>Technologies used:</li>
    <li
      v-for="(item, index) in data"
      :key="item"
      :style="{ color: getRandomPinkValue[index] }">
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

import { getRandomPinkArray } from '@/utils/index';

export default Vue.extend({
  name: 'Taglist',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    getRandomPinkValue(): string[] {
      return getRandomPinkArray((this.data as any).length);
    }
  }
});
</script>

<style lang='postcss' scoped>
ul {
  display: inline-block;
  padding: 10px 0;
}

li {
  display: inline-block;
  margin: 0 12px 0 0;
}
</style>

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

<script>
import { getRandomPinkArray } from '@/utils/index.js';

export default {
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
    getRandomPinkValue() {
      return getRandomPinkArray(this.data.length);
    }
  }
};
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

<template>
  <div :class="['container', $mq]">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Container'
});
</script>

<style lang="postcss" scoped>
.container {
  max-width: 1440px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 40px;
  position: relative;
  margin: auto;

  &.medium {
    display: flex;
  }
  &.large {
    display: flex;
  }
}
</style>

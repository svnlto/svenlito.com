<template>
  <div :class="['container', $mq]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
};
</script>

<style lang="postcss" scoped>
.container {
  max-width: 1440px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 32px;
  position: relative;
  margin: auto;

  &.md {
    display: flex;
  }
}
</style>

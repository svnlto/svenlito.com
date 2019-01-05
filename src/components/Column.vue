<template>
  <div class='column' :class="[width, $mq]">
  <h3 v-if="title">{{ title }} </h3>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: {
    width: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang='postcss' scoped>
.column {
  padding-left: 24px;
  padding-right: 24px;

  &.sm {
    padding-left: 32px;
    padding-right: 32px;
  }
}

.title {
  width: 100%;
}

.full {
  &.md {
    width: 100%;
  }
}

.half {
  &.md {
    width: 50%;
  }
}

.third {
  &.md {
    width: 33.33%;
  }
}

.twoThird {
  &.md {
    width: 66.66%;
  }
}

h3 {
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 40px;
}
</style>

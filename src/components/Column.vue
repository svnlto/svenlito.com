<template>
  <div class='column' :class="[width, $mq]">
  <h3 v-if="title">{{ title }}</h3>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
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
});
</script>

<style lang='postcss' scoped>
.column {
  &.small {
    padding-left: $gamma;
    padding-right: $gamma;
  }

  &.medium {
    padding-left: $beta;
    padding-right: $beta;
  }

  &.large {
    padding-left: $alpha;
    padding-right: $alpha;
  }
}

.title {
  width: 100%;
}

.full {
  &.medium {
    width: 100%;
  }

  &.large {
    width: 100%;
  }
}

.half {
  &.medium {
    width: 100%;
  }

  &.large {
    width: 50%;
  }
}

.third {
  &.medium {
    width: 33.33%;
  }

  &.large {
    width: 33.33%;
  }
}

.twoThird {
  &.medium {
    width: 66.66%;
  }

  &.large {
    width: 66.66%;
  }
}

h3 {
  font-weight: normal;
  font-size: $delta;
  margin-bottom: 40px;
}
</style>

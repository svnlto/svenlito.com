<template>
  <div><slot /></div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ColourCursor',
  props: {
    color: {
      type: String,
      default: 'pink'
    }
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      const cursor: HTMLCanvasElement = document.createElement('canvas');
      const ctx: CanvasRenderingContext2D = cursor.getContext('2d')!;
      const { $el, color } = this;
      const radius = 15 / 2;

      cursor.width = radius * 2;
      cursor.height = radius * 2;

      ctx.beginPath();
      ctx.arc(radius, radius, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = color;
      ctx.fill();

      ($el as any).style.cursor = `url(${cursor.toDataURL()}), auto`;
    }
  }
});
</script>


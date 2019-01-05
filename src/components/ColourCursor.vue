<template>
  <div><slot /></div>
</template>

<script>
export default {
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
      const cursor = document.createElement('canvas');
      const ctx = cursor.getContext('2d');
      const { $el, color } = this;
      const radius = 15 / 2;

      cursor.width = radius * 2;
      cursor.height = radius * 2;

      ctx.beginPath();
      ctx.arc(radius, radius, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = color;
      ctx.fill();

      $el.style.cursor = `url(${cursor.toDataURL()}), auto`;
    }
  }
};
</script>

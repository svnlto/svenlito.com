<template>
<div id="app">
  <ColourCursor :color='cursorColor'>
    <Header />
    <RouterView style="minHeight: 80vh" />
    <Footer />
  </ColourCursor>
</div>
</template>

<script lang="ts">
const config = require('./config');
import Vue from 'vue';

const ColourCursor = () => import('@/components/ColourCursor.vue');
const Header = () => import('@/components/Header.vue');
const Footer = () => import('@/components/Footer.vue');

export default Vue.extend({
  name: 'App',
  components: {
    ColourCursor,
    Header,
    Footer
  },
  data() {
    return {
      cursorColor: config.cursorGreen
    };
  }
});
</script>

<style lang="postcss">
html {
  box-sizing: border-box;
  color: $white;
  height: 100%;
  background-color: $black;
}

body {
  font-size: $delta;
  font-family: $fontMono;
  font-weight: normal;
  line-height: 1.5;
}

::selection {
  background: $cursorGreen;
  color: inherit;
  text-shadow: none;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  text-rendering: optimizeSpeed;
  padding: 0;
  margin: 0;
}

p {
  margin-bottom: 20px;
}

a {
  display: inline;
  font-size: $delta;
  color: inherit;
  text-decoration: none;
  padding-bottom: 1px;
  transition: 0.2s opacity;

  &:hover {
    opacity: 0.7;
  }
}

li {
  list-style: none;
}

hr {
  background-color: $lightGray;
  margin-top: 10px;
  margin-bottom: 60px;
  border: none;
  height: 2px;
  opacity: 0.15;
}
</style>

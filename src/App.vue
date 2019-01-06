<template>
<div id="app">
  <ColourCursor :color='cursorColor'>
    <Header />
    <RouterView style="padding: 1rem 0; minHeight: 80vh" />
    <Footer />
  </ColourCursor>
</div>
</template>

<script>
const config = require('@/config/index.js');

const ColourCursor = () => import('@/components/ColourCursor.vue');
const Header = () => import('@/components/Header.vue');
const Footer = () => import('@/components/Footer.vue');

export default {
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
};
</script>

<style lang="postcss">
@font-face {
  font-family: apercu;
  font-display: swap;
  src: url('/apercu-regular.woff2') format('woff2'),
    url('/apercu-regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: apercu;
  font-display: swap;
  src: url('/apercu-medium.woff2') format('woff2'),
    url('/apercu-medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: apercu;
  font-display: swap;
  src: url('/apercu-bold.woff2') format('woff2'),
    url('/apercu-bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: iosevka;
  font-display: swap;
  src: url('/iosevka-light.woff2') format('woff2'),
    url('/iosevka-light.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

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

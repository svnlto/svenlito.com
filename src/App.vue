<template>
<div id="app">
  <ColourCursor color='rgba(43, 154, 129, .75)'>
    <Header />
    <RouterView style="padding: 2rem 0; minHeight: 80vh" />
    <Footer />
  </ColourCursor>
</div>
</template>

<script>
const ColourCursor = () => import('@/components/ColourCursor.vue');
const Header = () => import('@/components/Header.vue');
const Footer = () => import('@/components/Footer.vue');

export default {
  name: 'App',
  components: {
    ColourCursor,
    Header,
    Footer
  }
};
</script>

<style lang="postcss">
@font-face {
  font-family: apercu;
  src: url('/apercu-regular.woff2') format('woff2'),
    url('/apercu-regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: apercu;
  src: url('/apercu-medium.woff2') format('woff2'),
    url('/apercu-medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: apercu;
  src: url('/apercu-bold.woff2') format('woff2'),
    url('/apercu-bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: iosevka;
  src: url('/iosevka-light.woff2') format('woff2'),
    url('/iosevka-light.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

html {
  box-sizing: border-box;
  font-size: 18px;
  background-color: #23282c;
  color: #e8e8e8;
  height: 100%;
}

::-moz-selection {
  background: #77797b;
  color: #e8e8e8;
  text-shadow: none;
}

::selection {
  background: #77797b;
  color: #e8e8e8;
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

body {
  font-family: iosevka;
  font-weight: normal;
  line-height: 1.5;
}

h1 {
  font-size: 40px;
  font-family: apercu;
  line-height: 60px;
  letter-spacing: -1px;

  &.sm {
    font-size: 38px;
  }

  &.md {
    font-size: 48px;
  }
}

h2 {
  -webkit-font-smoothing: antialiased;
  font-family: apercu;
  font-size: 26px;
  line-height: 1.3;

  &.sm {
    font-size: 26px;
  }

  &.md {
    font-size: 48px;
  }
}

h3 {
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 40px;
}

p {
  margin-bottom: 20px;
}

a {
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

input,
textarea {
  -webkit-appearance: none;
  border-radius: 0;
  width: 100%;
  outline: none;
  font-family: iosevka;
  font-size: 18px;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: currentColor;
}

fieldset {
  border: 0;
}

textarea {
  min-height: 200px;
  max-width: 100%;
}

hr {
  background-color: #77797b;
  margin-top: 10px;
  margin-bottom: 60px;
  border: none;
  height: 2px;
  opacity: 0.15;
}
</style>

<template>
  <nav>
    <RouterLink to="/" :class="$mq">About</RouterLink>
    <RouterLink to='/work' :class="$mq">Work</RouterLink>
    <RouterLink to='/contact' :class="$mq">Contact</RouterLink>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
};
</script>

<style lang="postcss" scoped>
nav {
  justify-content: flex-end;
}

nav a {
  margin-left: 20px;
  display: inline;

  &.sm {
    margin-left: 10px;
  }

  &.router-link-exact-active {
    border-bottom: 1px solid;
  }
}
</style>

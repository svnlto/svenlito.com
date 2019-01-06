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
  &.small {
    margin-left: 10px;
  }

  &.medium {
    margin-left: 10px;
  }

  &.large {
    margin-left: 20px;
  }

  &.router-link-exact-active {
    border-bottom: 1px solid;
  }
}
</style>

<template>
  <ul v-if="links && links.length">
    <li v-for="(item, index) in links" :key="item.name">
      <a :href="item.location" :class="$mq">{{item.name}}</a>
      <span class='bullet' v-if="index +1 !== links.length">&bull;</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Social',
  data() {
    return {
      links: [
        {
          name: 'email',
          location: 'https://svenlito.com/contact'
        },
        {
          name: 'github',
          location: 'https://github.com/svnlto'
        },
        {
          name: 'twitter',
          location: 'https://twitter.com/svenlito'
        }
      ]
    };
  }
};
</script>

<style lang='postcss' scoped>
li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 0;
}

a {
  color: $whiteDark40;
  font-size: $delta;
  margin: 0 10px 0 0;

  &.small {
    font-size: $epsilon;
  }
}

.bullet {
  color: $whiteDark40;
}
</style>

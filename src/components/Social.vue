<template>
  <ul v-if="links && links.length">
    <li v-for="(item, index) in links" :key="item.name">
      <a :href="item.location">{{item.name}}</a>
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

<style scoped>
li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 0;
}

a {
  font-size: 12px;
  margin: 0 10px 0 0;
  color: #77797b;
}

.bullet {
  color: #77797b;
}
</style>

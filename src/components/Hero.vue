<template>
  <Container>
    <Column width='full'>
      <div class='hero'>
      <!-- eslint-disable-next-line -->
      <h1 v-if="headline" :class="$mq" v-html="highlight()"/>
      <div style="margin-top: 24px">
        <slot />
      </div>
        <span v-if="link" class='link'>
          <RouterLink :to='link'>{{ text }} →</RouterLink>
        </span>
      </div>
    </Column>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';

export default {
  name: 'Hero',
  components: {
    Container,
    Column
  },
  props: {
    headline: {
      type: String,
      default: ''
    },
    keywords: {
      type: Array,
      default() {
        return [];
      }
    },
    link: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    highlight() {
      const regex = new RegExp(this.keywords.join('|'), 'gi');
      return this.headline.replace(
        regex,
        match => '<span class="_">' + match + '</span>'
      );
    }
  }
};
</script>

<style lang="postcss">
.hero {
  padding-top: 24px;
  background-position: 20px;
}

._ {
  -webkit-text-decoration-color: #efafe7;
  -webkit-text-decoration-line: underline;
  -webkit-text-decoration-skip: ink;
  text-decoration-color: #efafe7;
  text-decoration-line: underline;
  text-decoration-skip: ink;
}

.link {
  margin-top: 80px;
  display: table;
  border-bottom: 1px solid;

  &.md {
    display: flex;
    margin-top: 80px;
  }
}
</style>

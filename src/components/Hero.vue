<template>
  <Container>
    <Column width='full'>
      <div class='hero'>
      <!-- eslint-disable-next-line -->
      <h1 v-show="headline" :class="$mq" v-html="highlight()"/>
        <slot />
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
      if (!this.keywords.length) {
        return this.headline;
      }
      const regex = new RegExp(this.keywords.join('|'), 'gi');
      return this.headline.replace(
        regex,
        match => '<span class="_">' + match + '</span>'
      );
    }
  }
};
</script>

<style lang="postcss" scoped>
h1 {
  font-family: $fontSans;
  letter-spacing: -1px;

  &.small {
    font-size: $beta;
    line-height: $mega;
  }

  &.medium {
    font-size: $alpha;
    line-height: 60px;
  }

  &.large {
    font-size: $mega;
    line-height: 72px;
  }
}

.hero {
  padding-top: 24px;
  background-position: 20px;
}

.hero >>> ._ {
  text-decoration-color: #efafe7;
  text-decoration-line: underline;
  text-decoration-skip: ink;
}

.link {
  margin-top: 80px;
  display: table;
  border-bottom: 1px solid;

  &.medium {
    display: flex;
    margin-top: 80px;
  }
}
</style>

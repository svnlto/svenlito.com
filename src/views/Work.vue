<template>
<Container>
  <Column width='full'>
    <Hero :keywords="heroKeywords" :headline='heroHeadline' />
    <HeroSub :headline='subHeadline' />
    <Column width='full'>
      <hr />
    </Column>
    <Timeline :data='events' />
  </Column>
</Container>
</template>

<script lang="ts">
import Vue from 'vue';

import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';
import Hero from '@/components/Hero.vue';
import HeroSub from '@/components/HeroSub.vue';
import Timeline from '@/components/Timeline.vue';

export default Vue.extend({
  name: 'Work',
  components: {
    Container,
    Column,
    Hero,
    HeroSub,
    Timeline
  },
  data() {
    return {
      heroKeywords: [
        'design',
        'deliver',
        'adapt',
        'software development',
        'across platforms'
      ],
      heroHeadline: `I help clients design, adapt and deliver projects through modern software development methodologies and techniques across platforms.`,
      subHeadline: `Areas I have worked in include containerisation, real-time communications, memory forensics, fin-tech, offline-first as well as mobile and game development.`
    };
  },
  computed: {
    events(): string[] {
      return this.$store.state.events;
    }
  }

});
</script>

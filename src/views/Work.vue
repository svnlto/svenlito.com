<template>
<Container>
  <Column width='full'>
    <Hero :keywords="heroKeywords" :headline='heroHeadline' />
    <HeroSub :headline='subHeadline' />
    <Column width='full'>
      <hr />
    </Column>
    <ApolloQuery
      :query="require('../graphql/allEventsQuery.gql')"
      :variables="{
        where: {
          AND:[],
          status: 'PUBLISHED'
        },
        orderBy: 'date_DESC'
      }"
       >
      <template slot-scope="{ result: { loading, error, data} }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <Timeline v-else-if="data" :events='data.events' />
      </template>
    </ApolloQuery>
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
  }
});
</script>

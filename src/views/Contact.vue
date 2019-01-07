<template>
  <Container>
    <Column width='full'>
      <Hero headline='Drop me a line.' />
      <Container>
        <Column
          width='half'
          title="Let's talk about your project or just send me a hello."
        />
        <Column width='half'>
          <ContactForm color='white' />
        </Column>
      </Container>
    </Column>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue';
import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';
import ContactForm from '@/components/ContactForm.vue';
import Hero from '@/components/Hero.vue';

export default Vue.extend({
  name: 'Contact',
  components: {
    Container,
    Column,
    ContactForm,
    Hero
  }
});
</script>

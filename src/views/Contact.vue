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

<script>
import Container from '@/components/Container';
import Column from '@/components/Column';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';

export default {
  name: 'Contact',
  components: {
    Container,
    Column,
    ContactForm,
    Hero
  }
};
</script>

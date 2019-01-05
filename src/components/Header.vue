<template>
  <Container>
    <Column width='full'>
      <header>
        <Logo />
        <Navigation />
      </header>
    </Column>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';
import Logo from '@/components/Logo.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'Header',
  components: {
    Container,
    Column,
    Logo,
    Navigation
  }
};
</script>

<style scoped>
header {
  width: 100%;
  margin: auto;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

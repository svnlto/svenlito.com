<template>
  <Container>
    <Column width='full'>
      <footer class="footer">
        <div class="legal">© {{ year }} SvenLito Software Ltd.</div>
        <Social />
      </footer>
    </Column>
  </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import Column from '@/components/Column.vue';
import Social from '@/components/Social.vue';

export default {
  name: 'Footer',
  components: {
    Container,
    Column,
    Social
  },
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.legal {
  font-size: 12px;
  color: #77797b;
}

.footer {
  width: 100%;
  margin: auto;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

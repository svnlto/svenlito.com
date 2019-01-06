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

<style lang='postcss' scoped>
.legal {
  color: $white;
  font-size: $delta;
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

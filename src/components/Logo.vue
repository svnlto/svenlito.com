<template>
 <RouterLink to="/">
  <svg width='48px' height='48px' view-box='0 0 48 48' version='1.1'>
    <defs>
      <linearGradient id='gradient' x1='21%' y1='33%' x2='19%' y2='76%'>
        <stop offset='5%' :stop-color='gradient.from' />
        <stop offset='95%' :stop-color='gradient.to' />
      </linearGradient>
      <rect id='path-1' x='30' y='30' width='35' height='35' />
      <rect id='path-3' x='15' y='15' width='40' height='40' />
      <rect id='path-5' x='0' y='0' width='48' height='48' />
    </defs>
    <use stroke="url('#gradient')" stroke-width='1' fill='none' xlink:href='#path-1' />
    <use stroke="url('#gradient')" stroke-width='1' fill='none' xlink:href='#path-3' />
    <use stroke="url('#gradient')" stroke-width='2' fill='none' xlink:href='#path-5' />
  </svg>
 </RouterLink>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Logo',
  data() {
    return {
      gradient: {
        from: 'rgb(43, 154, 129)',
        to: 'rgb(239, 175, 231)'
      }
    };
  }
});
</script>

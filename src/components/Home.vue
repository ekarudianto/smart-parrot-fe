<template lang='pug'>
  .home
    Sun
    Island
    Sea
</template>

<script>
import Island from './Island.vue';
import Sea from './Sea.vue';
import Sun from './Sun.vue';

export default {
  name: 'Home',
  components: {
    Island,
    Sea,
    Sun,
  },
};
</script>

<style lang='scss' scoped>
  .home {}
</style>

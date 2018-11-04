<template lang='pug'>
  .home
    Sun
    Parrot
    Island
    Ship
    Sea
</template>

<script>
import Island from './Island.vue';
import Parrot from './Parrot.vue';
import Sea from './Sea.vue';
import Sun from './Sun.vue';
import Ship from './Ship.vue';

export default {
  name: 'Home',
  components: {
    Island,
    Parrot,
    Sea,
    Sun,
    Ship,
  },
};
</script>

<style lang='scss' scoped>
  .home {}
</style>

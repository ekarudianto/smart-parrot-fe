<template lang='pug'>
  .home
    Sun(:is-display-modal="isDisplayModal")
    Clouds(:is-display-modal="isDisplayModal")
    Parrot(:is-display-modal="isDisplayModal")
    Bubble(:is-display-modal="isDisplayModal")
    Island(:is-display-modal="isDisplayModal")
    Ship(:is-display-modal="isDisplayModal")
    Sea(:is-display-modal="isDisplayModal")
</template>

<script>
import Bubble from './Bubble.vue';
import Clouds from './Clouds.vue';
import Island from './Island.vue';
import Parrot from './Parrot.vue';
import Sea from './Sea.vue';
import Sun from './Sun.vue';
import Ship from './Ship.vue';

export default {
  name: 'Home',
  components: {
    Bubble,
    Clouds,
    Island,
    Parrot,
    Sea,
    Sun,
    Ship,
  },
  data() {
    return {
      isDisplayModal: false,
    };
  },
  methods: {
    toggleModal() {
      console.log('Parrot is clicked, display modal!');
      this.isDisplayModal = !this.isDisplayModal;
    },
  },
};
</script>

<style lang='scss' scoped>
  .home {}
</style>

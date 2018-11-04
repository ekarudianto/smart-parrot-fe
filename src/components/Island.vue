<template lang='pug'>
  .island
    img(:src="img")
</template>

<script>
import img from '@/assets/island.png';

export default {
  name: 'Island',
  data() {
    return {
      img,
    };
  },
};
</script>

<style lang='scss' scoped>
  .island {
    img {
      bottom: 30px;
      position: fixed;
      width: 500px;
      z-index: 5;
    }
  }
</style>

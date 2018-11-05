<template lang='pug'>
  .island
    img(
      :src="img"
      :class="{ gray: isDisplayModal }"
    )
</template>

<script>
import img from '@/assets/island.png';

export default {
  name: 'Island',
  props: {
    isDisplayModal: {
      type: Boolean,
      required: true,
    },
  },
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

      &.gray {
        -webkit-filter: grayscale(1);
      }
    }
  }
</style>

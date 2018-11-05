<template lang='pug'>
  .ship
    img(
      :src="img"
      :class="{ gray: isDisplayModal }"
    )
</template>

<script>
import img from '@/assets/ship.png';

export default {
  name: 'Ship',
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
  .ship {
    img {
      width: 100px;
      position: fixed;
      bottom: 70px;
      right: 0;
      animation: moving 120s linear infinite;
      -webkit-animation: moving 120s linear infinite;
      -moz-animation: moving 120s linear infinite;

      &.gray {
        -webkit-filter: grayscale(1);
      }
    }
  }

  @keyframes moving {
    0% {
        right: -5%;
    }
    100% {
        right: 120%;
    }
  }

  @-webkit-keyframes moving {
    0% {
        right: -5%;
    }
    100% {
        right: 120%;
    }
  }

  @-moz-keyframes moving {
    0% {
        right: -5%;
    }
    100% {
        right: 120%;
    }
  }
</style>

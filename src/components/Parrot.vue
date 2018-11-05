<template lang='pug'>
  .parrot
    img(
      :src="img"
      :class="{silence: isDisplayModal}"
      @click="onClick"
    )
</template>

<script>
import img from '@/assets/parrot.png';

export default {
  name: 'Parrot',
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
  methods: {
    onClick() {
      if (this.isDisplayModal) {
        return;
      }

      this.$parent.toggleModal();
    },
  },
};
</script>

<style lang='scss' scoped>
  .parrot {
    img {
      position: fixed;
      width: 250px;
      z-index: 7;
      bottom: 20px;
      left: 290px;
      animation: shake 1s cubic-bezier(.36,.07,.19,.97) both infinite;

      &.silence {
        animation: none !important;
        cursor: default !important;
      }

      &:hover {
        cursor: pointer;
        animation: none;
      }
    }
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(0, -1px, 0);
    }

    20%, 80% {
      transform: translate3d(0, 2px, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(0, -4px, 0);
    }

    40%, 60% {
      transform: translate3d(0, 4px, 0);
    }
}
</style>

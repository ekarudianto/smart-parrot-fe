<template lang='pug'>
  .clouds(:class="{ gray: isDisplayModal }")
    .cloud--1
      .cloud
    .cloud--2
      .cloud
    .cloud--3
      .cloud
</template>

<script>
export default {
  name: 'Clouds',
  props: {
    isDisplayModal: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
  .clouds {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 4;

    &.gray {
      .cloud {
        background-color: #808080;

        &:after,
        &:before {
            background-color: #808080;
        }
      }
    }

    .cloud {
      background: #fff;
      border-radius: 100px;
      box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
      height: 100px;
      position: relative;
      width: 350px;

      &:after,
      &:before {
        background: #fff;
        content: '';
        position: absolute;
        z-indeX: -1;
      }

      &:after {
        border-radius: 100px;
        height: 100px;
        left: 50px;
        top: -50px;
        width: 100px;
      }

      &:before {
        border-radius: 200px;
        width: 180px;
        height: 180px;
        right: 50px;
        top: -90px;
      }
    }

    .cloud--1 {
      animation: animateCloud 20s linear infinite;
      transform: scale(0.2);
    }

    .cloud--2 {
      animation: animateCloud 30s linear infinite;
      transform: scale(0.6);
    }

    .cloud--3 {
      animation: animateCloud 25s linear infinite;
      transform: scale(0.3);
    }

    @keyframes animateCloud {
        0% {
            margin-left: -1000px;
        }
        100% {
            margin-left: 100%;
        }
    }
  }
</style>

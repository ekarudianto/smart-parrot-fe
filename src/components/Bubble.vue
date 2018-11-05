<template lang='pug'>
  .bubble(:class="{expand: isDisplayModal}")
    .intro__bubble(v-show="!isDisplayModal")
      | Click me !
    .bubble__small
    .bubble__small--2
</template>

<script>
export default {
  name: 'Bubble',
  props: {
    isDisplayModal: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
  .bubble {
    position: fixed;
    width: 150px;
    height: 75px;
    background: #FFF;
    border-radius: 50%;
    bottom: 40%;
    left: 33%;
    z-index: 5;
    transition: width 1s, height 1s;

    &.expand {
      width: 600px;
      height: 500px;
      bottom: 30%;
      left: 30%;

      .bubble__small {
        bottom: 70px;
        left: 30px;
      }

      .bubble__small--2 {
        bottom: 60px;
        left: 20px;
      }
    }

    .intro__bubble {
      margin: 25px auto;
      text-align: center;
    }

    .bubble__small {
      width: 30px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      bottom: -15px;
      background: #FFF;
    }

    .bubble__small--2 {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      bottom: -25px;
      left: -10px;
      background: #FFF;
    }
  }
</style>

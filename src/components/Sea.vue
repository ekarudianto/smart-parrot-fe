<template lang='pug'>
  .sea(:class="{ gray: isDisplayModal }")
</template>

<script>
export default {
  name: 'Sea',
  props: {
    isDisplayModal: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
  .sea {
    background-color: #20B1AA;
    bottom: 0;
    height: 70px;
    position: fixed;
    width: 100%;
    z-index: 3;

    &.gray {
      background-color: #808080;
    }
  }
</style>

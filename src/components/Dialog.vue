<template lang='pug'>
  .dialogs
    .dialog(
      v-for="(dialog, index) in dialogs"
      v-if="dialog"
      :key="index"
      :class="{ response : dialog.type === 'response', request : dialog.type === 'request' }"
    )
      .dialog__request(v-if="dialog.type === 'request'") {{ dialog.result }}
      .dialog__response(v-if="dialog.type === 'response'")
        Card(:items="dialog.result")
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Dialog',
  components: {
    Card,
  },
  props: {
    dialogs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
  .dialogs {
    height: 320px;
    overflow-y: auto;

    .dialog {
      clear: right;
      display: block;

      .dialog__response {
        max-width: 300px;
        padding: 5px;
        margin: 5px 0;
        border-radius: 5px;
        background: #79CB1A;
        position: relative;
        box-shadow: 0px 2px 9px 1px rgba(214,214,214,1);
      }

      .dialog__request {
        width: 200px;
        padding: 5px;
        margin: 5px 0;
        border-radius: 5px;
        background: #F6C12B;
        float: right;
        position: relative;
        box-shadow: 0px 2px 9px 1px rgba(214,214,214,1);
      }
    }
  }
</style>

<template lang='pug'>
  .bubble(:class="{expand: isDisplayModal}")
    .bubble__intro(v-if="!isDisplayModal")
      | Sqwaaaak !
    .bubble__dialog(v-if="isDisplayModal")
      .close-dialog
        a(@click="onCloseClick") &times;
      .parrot-msg
        vue-typer(:text="parrotMsg")
      Dialog(:dialogs="dialogs")
      .preloader
        span(v-if="isFetchData") Smartee is typing ...
      Tags
      .input
        form(v-on:submit.prevent="onSubmit")
          input(type="text" name="input" v-model="message")
          button Submit
    .bubble__small
    .bubble__small--2
</template>

<script>
import { VueTyper } from 'vue-typer';
import Dialog from './Dialog.vue';
import Tags from './Tags.vue';

const BACKEND_URL = 'https://api.myjson.com/bins/10ospy';
const DEFAULT_MSG = [
  'Hi ! My name is Smartee',
  'Have problem with travel destination ideas ?',
  'Speak with me !',
];

export default {
  name: 'Bubble',
  components: {
    Dialog,
    Tags,
    VueTyper,
  },
  props: {
    isDisplayModal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      dialogs: [],
      isFetchData: false,
      message: '',
      parrotMsg: DEFAULT_MSG,
    };
  },
  methods: {
    onCloseClick() {
      if (this.isDisplayModal) {
        this.dialogs = [];
        this.message = '';
      }
      this.$parent.toggleModal();
    },
    setMsg(msg) {
      this.message = msg;
    },
    onSubmit() {
      const { message } = this;

      if (message) {
        this.message = '';
        this.dialogs.push({
          type: 'request',
          result: message,
        });

        this.isFetchData = true;
        this.axios.get(`${BACKEND_URL}?text=${message}`).then((res) => {
          this.isFetchData = false;
          if (res.data.length) {
            this.dialogs.push({
              type: 'response',
              result: res.data,
            });

            // TODO : This is error handling !
            // this.dialogs.push({
            //   type: 'response',
            //   error: 'hei',
            // });

            let timeout = null;
            timeout = setTimeout(() => {
              const container = document.querySelectorAll('.dialogs');
              container[0].scrollTop = container[0].scrollHeight;
              clearTimeout(timeout);
              timeout = null;
            }, 50);
          }
        });
      }
    },
  },
};
</script>

<style lang='scss' scoped>
  .bubble {
    position: fixed;
    max-width: 150px;
    max-height: 75px;
    width: 100%;
    height: 100%;
    background: #FFF;
    border-radius: 50%;
    bottom: 290px;
    left: 490px;
    z-index: 6;
    transition: max-width .7s, max-height .7s;

    &.expand {
      max-width: 600px;
      max-height: 500px;
      bottom: 30%;
      left: 34%;
      border-radius: 5px;
      transition: none;

      .bubble__small,
      .bubble__small--2 {
        display: none;
      }
    }

    .close-dialog {
      text-align: right;
      font-size: 30px;

      a {
        cursor: pointer;

        &:hover {
          color: #2EB5E5;
        }
      }
    }

    .parrot-msg {
      margin: 5px 0;
    }

    .preloader {
      font-size: 9px;
      color: #333;
      height: 13px;
      margin-top: 5px;
      margin-bottom: 5px;
      font-style: italic;
    }

    .input {
      input[type="text"] {
        border: none;
        border-bottom: 2px solid #2EB5E5;
        display: inline-block;
        padding: 10px;
        width: 80%;
      }

      button {
        border: 2px solid #2EB5E5;
        background: #FFF;
        padding: 10px 15px;
        margin-left: 5px;
        cursor: pointer;
      }
    }

    .bubble__intro {
      margin: 25px auto;
      text-align: center;
    }

    .bubble__dialog {
      padding: 15px 40px;
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

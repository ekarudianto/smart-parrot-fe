<template lang='pug'>
  .tags
    .tags__title Here are some suggestion of what to type :
    .tags__suggestion
      .suggestion(
          v-for="(item, index) in suggestions"
          :key="index"
          @click="onClick(item)"
        ) {{ item }}
</template>

<script>
const SUGGESTIONS = [
  'Show me flights from Frankfurt to Paris in December',
  'Where can I go in July next year?',
  'I\'d like to go to Ibiza on the 1st of December',
  'Please show me flights for Paris during next week',
];

export default {
  name: 'Tags',
  props: {},
  data() {
    return {
      suggestions: SUGGESTIONS,
    };
  },
  methods: {
    onClick(msg) {
      this.$parent.setMsg(msg);
    },
  },
};
</script>

<style lang='scss' scoped>
  .tags {
    overflow-x: auto;
    .tags__title {
      font-size: 13px;
    }

    .tags__suggestion {
      width: 500%;
      padding: 5px 0 15px;

      .suggestion {
        border-radius: 3px;
        border: 2px solid #A92E1E;
        cursor: pointer;
        display: inline-block;
        font-size: 12px;
        margin: 2px 3px;
        padding: 3px 8px;
        font-weight: 900;
      }
    }
  }
</style>

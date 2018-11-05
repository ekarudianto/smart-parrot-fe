<template lang='pug'>
  transition
    router-view
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang='scss'>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  html,body {
    height: 100%;
    margin: 0;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
  }

  body {
    background-color: #2EB5E5;
  }
</style>

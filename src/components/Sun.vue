<template lang='pug'>
  .sun(:class="{ gray: isDisplayModal }")
    .sun__ray
      .ray.ray--1
      .ray.ray--2
      .ray.ray--3
      .ray.ray--4
      .ray.ray--5
      .ray.ray--6
      .ray.ray--7
      .ray.ray--8
      .ray.ray--9
      .ray.ray--10
</template>

<script>
export default {
  name: 'Sun',
  props: {
    isDisplayModal: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
  .sun {
    position: fixed;
    top:100px;
    right:200px;
    margin: auto;
    width:70px;
    height:70px;
    border-radius:50%;
    background:#FFF;
    opacity:0.9;
    box-shadow: 0px 0px 40px 15px #FFF;
    z-index: 3;

    &.gray {
      background: #808080;
      box-shadow: 0px 0px 40px 15px #808080;
    }

    .sun__ray {
      position: absolute;
      margin: auto;
      top:0px;
      left:0;
      right:0;
      bottom:0;
      width:70px;
      -webkit-animation: ray_anim 120s linear infinite;
      animation: ray_anim 120s linear infinite;
    }

    .ray {
      background: -webkit-linear-gradient(
        top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%
      );
      background: linear-gradient(
        top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%
      );
      margin-left:10px;
      border-radius:80% 80% 0 0;
      position:absolute;
      opacity:0.1;

      &.ray--1 {
        height:170px;
        width:30px;
        -webkit-transform: rotate(180deg);
        top:-175px;
        left: 15px;
      }

      &.ray--2 {
        height:100px;
        width:8px;
        -webkit-transform: rotate(220deg);
        top:-90px;
        left: 75px;
      }

      &.ray--3 {
        height:170px;
        width:50px;
        -webkit-transform: rotate(250deg);
        top:-80px;
        left: 100px;
      }

      &.ray--4 {
        height:120px;
        width:14px;
        -webkit-transform: rotate(305deg);
        top:30px;
        left: 100px;
      }

      &.ray--5 {
        height:140px;
        width:30px;
        -webkit-transform: rotate(-15deg);
        top:60px;
        left: 40px;
      }

      &.ray--6 {
        height:90px;
        width:50px;
        -webkit-transform: rotate(30deg);
        top:60px;
        left: -40px;
      }

      &.ray--7 {
        height:180px;
        width:10px;
        -webkit-transform: rotate(70deg);
        top:-35px;
        left: -40px;
      }

      &.ray--8 {
        height:120px;
        width:30px;
        -webkit-transform: rotate(100deg);
        top:-45px;
        left:-90px;
      }

      &.ray--9 {
        height:80px;
        width:10px;
        -webkit-transform: rotate(120deg);
        top:-65px;
        left:-60px;
      }

      &.ray--10 {
        height:190px;
        width:23px;
        -webkit-transform: rotate(150deg);
        top:-185px;
        left: -60px;
      }
    }
  }

  @-webkit-keyframes ray_anim {
    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg);}
    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg);}
  }
</style>

<template>
  <div class="cloud3">
    <div class="cloud-base"></div>
    <div class="cloud-right"></div>
    <div class="cloud-left"></div>
  </div>
</template>

<script>
export default {
  name: 'Cloud3',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
  @import "src/styles/components/vars.scss";

  .cloud3 {
    right: 0;
    margin: -20em auto;
    width: 350px;
    height: 400px;
    position: fixed;
    -webkit-animation: move 30s infinite linear;
    -moz-animation: move 30s infinite linear;
    -ms-animation: move 30s infinite linear;
    z-index: 1;
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
    border-radius: 200px;

    .cloud-base {
      width: 280px;
      height: 100px;
      background: $cloud-white;
      border-radius: 100em;
      position: absolute;
      z-index: 100;
      top: 50px;
      box-shadow: 0 3px 3px rgba(0,0,0, 0.3);
      background: linear-gradient($cloud-white 70%, $cloud-grey);
    }

    .cloud-right {
      width: 140px;
      height: 145px;
      margin: 0 auto;
      background: $cloud-white;
      position: absolute;
      border-radius: 100em;
      top: -10px;
      right: 160px;
    }

    .cloud-left {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      background: $cloud-white;
      position: absolute;
      border-radius: 100em;
      top: 0;
      right: 120px;
    }
  }

  @-webkit-keyframes move {
    0% {left: 0px;}
    49% {left: 1240px; opacity: 1;}
    50% {left: 1240px; opacity: 0;}
    51% {left: -1240px; opacity: 0;}
    52% {left: -1240px; opacity: 1;}
    100% {left: 0px;}
  }

  @-webkit-keyframes backup {
    0% {left: -1240px;}
    100% {left: 1240px;}

  }
</style>

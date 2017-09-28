<template>
  <div class="cloud2">
    <div class="cloud-base"></div>
    <div class="cloud-right"></div>
    <div class="cloud-left"></div>
  </div>
</template>

<script>
export default {
  name: 'Cloud2',
  data () {
    return {
    }
  }
}
</script>

  <style lang="sass">
    .cloud2 {
      margin: -25em auto;
      width: 350px;
      height: 400px;
      position: fixed;
      -webkit-animation: move 25s infinite linear;
      -moz-animation: move 25s infinite linear;
      -ms-animation: move 25s infinite linear;
      z-index: 1;
      -webkit-border-radius: 200px;
      -moz-border-radius: 200px;
      border-radius: 200px;

    .cloud-base {
      width: 280px;
      height: 100px;
      background: #f2f2f2;
      border-radius: 100em;
      position: absolute;
      z-index: 100;
      top: 50px;
      box-shadow: 0 3px 3px rgba(0,0,0, 0.3);
      background: linear-gradient(#F2F2F2 70%, #E5E5E5);
    }

    .cloud-right {
      width: 125px;
      height: 130px;
      margin: 0 auto;
      background: #F2F2F2;
      position: absolute;
      border-radius: 100em;
      top: -15px;
      right: 125px;
    }

    .cloud-left {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      background: #F2F2F2;
      position: absolute;
      border-radius: 100em;
      top: 0;
      right: 200px;
    }
  }

  @-webkit-keyframes move {
    0% {left: 0px;}
    49% {left: 1140px; opacity: 1;}
    50% {left: 1140px; opacity: 0;}
    51% {left: -1140px; opacity: 0;}
    52% {left: -1140px; opacity: 1;}
    100% {left: 0px;}
  }

  @-webkit-keyframes backup {
    0% {left: -1140px;}
    100% {left: 1140px;}

  }
</style>

<template>
  <div class="cloud">
    <div class="cloud-base"></div>
    <div class="cloud-right"></div>
    <div class="cloud-left"></div>
  </div>
</template>

<script>
export default {
  name: 'Cloud',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
  .cloud {
    margin: 3em auto;
    width: 350px;
    height: 400px;
    position: relative;
    -webkit-animation: move 23s infinite linear;
    -moz-animation: move 23s infinite linear;
    -ms-animation: move 23s infinite linear;
    z-index: 1;
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
    border-radius: 200px;

  .cloud-base {
    width: 200px;
    height: 80px;
    background: #f2f2f2;
    border-radius: 100em;
    position: absolute;
    z-index: 100;
    top: 50px;
    box-shadow: 0 3px 3px rgba(0,0,0, 0.3);
    background: linear-gradient(#F2F2F2 70%, #E5E5E5);
  }

  .cloud-right {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: #F2F2F2;
    position: absolute;
    border-radius: 100em;
    top: 10px;
    right: 180px;
  }

  .cloud-left {
    width: 120px;
    height: 110px;
    margin: 0 auto;
    background: #F2F2F2;
    position: absolute;
    border-radius: 100em;
    top: 20px;
    right: 200px;
  }
}

@-webkit-keyframes move {
  0% {left: 0px;}
  49% {left: 940px; opacity: 1;}
  50% {left: 940px; opacity: 0;}
  51% {left: -940px; opacity: 0;}
  52% {left: -940px; opacity: 1;}
  100% {left: 0px;}
}

@-webkit-keyframes backup {
  0% {left: -940px;}
  100% {left: 940px;}

}
</style>

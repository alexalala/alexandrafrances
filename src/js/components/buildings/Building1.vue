<template>
  <div class="building">
    <div class="windows"></div>
    <div class="windows"></div>
    <div class="windows"></div>
  </div>
</template>

<script>
  export default {
    name: 'Building1'
  }
</script>

<style lang="sass">
  @import "src/styles/components/vars.scss";

  .building {
    background-color: $darkest-grey;
    height: 20vh;
    width: 18vw;
    position: absolute;
    bottom: 0;
    margin-bottom: 120px;

    .windows {
      width: 10%;
      height: 100%;
      margin: 0 10%;
      background: repeating-linear-gradient(
        to bottom,
        $darkest-grey,
        $darkest-grey 20px,
        $white 20px,
        $white 40px
      );
      display: inline-block;
    }
  }
</style>

<template>
  <div class="house">
    <div class="roof"></div>
    <div class="walls"></div>
  </div>
</template>

<script>
  export default {
    name: "House"
  }
</script>

<style lang="sass">

  @import "src/styles/components/vars.scss";

  .house {
    height: 200px;
    width: 200px;
    margin-left: 32vw;
    bottom: 17rem;


    .roof {
      width: 0;
      height: 0;
      border-left: 100px solid transparent;
      border-right: 100px solid transparent;
      border-bottom: 100px solid $pink;
    }
  }
</style>

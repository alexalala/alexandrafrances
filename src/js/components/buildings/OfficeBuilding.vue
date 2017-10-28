<template>
  <div class="offices">
    <div class="windows"></div>
  </div>
</template>

<script>
  export default {
    name: 'OfficeBuilding'
  };
</script>

<style lang="sass">
  @import "src/styles/components/vars.scss";

  .offices {
    background-color: $dark-grey;
    height: 45vh;
    bottom: 0;
    position: absolute;
    width: 15vw;
    margin-left: 18vw;
    border-radius: 5px;

    .windows {
      height: 90%;
      width: 80%;
      margin-left: 10%;
      background: repeating-linear-gradient(
        to bottom,
        $dark-grey,
        $dark-grey 20px,
        $white 20px,
        $white 40px
      );
    }
  }
</style>

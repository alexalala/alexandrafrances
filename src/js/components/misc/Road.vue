<template>
  <div class="ground">
    <div class="pavement"></div>
    <div class="road-dividers"></div>
  </div>
</template>

<script>
export default {
  name: 'Road'
}
</script>

<style lang="sass">
  @import "src/styles/components/vars.scss";

  .ground {
    width: 100%;
    height: 7rem;
    background-color: $grey;
    bottom: 0;
    position: absolute;

    .pavement {
      width: 100%;
      height: 10%;
      background-color: $light-grey;
    }
    .road-dividers {
      width: 100%;
      height: 5%;
      position: absolute;
      background: repeating-linear-gradient(
        to right,
        $grey,
        $grey 60px,
        $white 60px,
        $white 100px
      );
      bottom: 50%;
      top: 50%;
    }
  }
</style>

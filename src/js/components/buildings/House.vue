<template>
  <div class="house">
    <div class="roof"></div>
    <div class="walls">
      <div class="window"></div>
      <div class="door">
        <div class="doorknob"></div>
      </div>
      <div class="window"></div>
    </div>
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
      border-left: 110px solid transparent;
      border-right: 110px solid transparent;
      border-bottom: 100px solid $brick-red;
      margin-left: -10px;
      position: relative;
    }
    .walls {
      height: 100px;
      width: 200px;
      background-color: $red;
      position: relative;

      .window {
        height: 40px;
        width: 40px;
        background-color: $grey;
        position: absolute;
      }
      .window:nth-child(1) {
        margin: 20px;
      }
      .windw:nath-child(2) {
        margin: 20px 0 0 140px;
      }
      .door {
        height: 50px;
        width: 30px;
        background-color: $green;
        margin-left: 85px;
        position: absolute;
        bottom: 0;

        .doorknob {
          height: 5px;
          width: 5px;
          border-radius: 4px;
          background-color: $gold;
          margin: 20px;
        }
      }
    }
  }
</style>

<template>
  <div class="pug">
    <div class="head">
      <div class="eye"></div>
      <div class="snoot"></div>
      <div class="ear"></div>
    </div>
    <div class="body">
      <div class="collar"></div>
    </div>
    <div class="legs">
      <div class="leg">
        <div class="foot"></div>
      </div>
      <div class="leg">
        <div class="foot"></div>
      </div>
      <div class="leg">
        <div class="foot"></div>
      </div>
      <div class="leg">
        <div class="foot"></div>
      </div>
    </div>
    <div class="tail"></div>
  </div>
</template>

<script>
  export default {
    name: "Pug"
  };
</script>

<style lang="sass">
  @import "src/styles/components/vars.scss";

  .pug {
    height: 80px;
    width: 80px;
    position: absolute;
    margin-left: 70vw;
    bottom: 5rem;
    z-index: 1;

    .body {
      height: 35px;
      width: 60px;
      background-color: $black;
      border-radius: 25px;
      position: absolute;

      .collar {
        position: absolute;
        height: 3px;
        width: 26px;
        background-color: $red;
        transform: rotate(36deg);
        margin: 5px 0 0 37px;
      }
    }
    .head {
      height: 30px;
      width: 30px;
      background-color: $black;
      border-radius: 13px;
      margin: -14px 40px;

      .eye {
        height: 3px;
        width: 3px;
        background-color: $white;
        margin: 11px 20px;
        position: absolute;
      }
      .snoot {
        height: 4px;
        width: 4px;
        margin: 14px 27px;
        background-color: $grey;
        position: absolute;
        border-radius: 2px;
      }
      .ear {
        width: 8px;
        height: 8px;
        border-radius: 0 0 5px 5px;
        position: absolute;
        margin: 6px 8px;
        background-color: $darkest-grey;
      }
    }
    .legs {
      .leg {
        background-color: $black;
        height: 15px;
        width: 7px;

        .foot {
          height: 5px;
          width: 9px;
          position: absolute;
          background-color: $black;
          border-radius: 6px;
        }
      }
      .leg:nth-child(1) {
        margin: 30px 0 0 50px;
        transform: rotate(-20deg);

        .foot {
          transform: rotate(28deg);
          margin: 13px 0;
        }
      }
      .leg:nth-child(2) {
        margin: -18px 40px;

        .foot {
          margin: 11px 1px;
        }
      }
      .leg:nth-child(3) {
        margin: 8px 10px;

        .foot {
          margin: 10px 1px;
        }
      }
      .leg:nth-child(4) {
        margin: -27px 18px;
        transform: rotate(-20deg);

        .foot {
          margin: 11px 1px;
          transform: rotate(15deg);
        }
      }
    }
  }
</style>

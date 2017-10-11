<template>
  <div class="content">
    <div class="container">
      <cloud></cloud>
      <cloud2></cloud2>
      <cloud3></cloud3>
    </div>
    <building1></building1>
    <div class="ground">
      <div class="pavement"></div>
      <div class="road-dividers"></div>
    </div>
  </div>
</template>

<script>
import Cloud from '../components/clouds/Cloud.vue';
import Cloud2 from '../components/clouds/Cloud2.vue';
import Cloud3 from '../components/clouds/Cloud3.vue';
import Building1 from '../components/buildings/Building1.vue';

export default {
  name: 'MainContent'
}
</script>

<style lang="sass">
  body {
    padding: 0;
    overflow: hidden;
    margin: 0;

    .content {
      background-color: #54AFAF;
      height: 85vh;
      position: relative;

      .container {
        width: 100%;
        position: relative;
        height: 400px;
        overflow: hidden;
        margin: auto;
        margin: 0;
      }
      .ground {
        width: 100%;
        height: 15vh;
        background-color: grey;
        bottom: 0;
        position: absolute;

        .pavement {
          width: 100%;
          height: 10%;
          background-color: lightgray;
        }
        .road-dividers {
          width: 100%;
          height: 5%;
          position: absolute;
          background: repeating-linear-gradient(
            to right,
            grey,
            grey 60px,
            white 60px,
            white 100px
          );
          bottom: 50%;
          top: 50%;
        }
      }
    }
  }
</style>

<template>
  <div class="content">
    <div class="container">
      <cloud></cloud>
      <cloud2></cloud2>
      <cloud3></cloud3>
    </div>
    <block-of-flats></block-of-flats>
    <pug></pug>
    <road></road>
  </div>
</template>

<script>
import Cloud from '../components/clouds/Cloud.vue';
import Cloud2 from '../components/clouds/Cloud2.vue';
import Cloud3 from '../components/clouds/Cloud3.vue';
import BlockOfFlats from '../components/buildings/BlockOfFlats.vue';
import Road from '../components/misc/Road.vue';
import Pug from '../components/misc/Pug.vue';

export default {
  name: 'MainContent'
}
</script>

<style lang="sass">
  @import "src/styles/components/vars.scss";

  body {
    padding: 0;
    overflow: hidden;
    margin: 0;

    .content {
      background-color: $blue;
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
    }
  }
</style>

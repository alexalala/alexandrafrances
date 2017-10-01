<template>
  <div class="content">
    <div class="scallop"></div>
    <div class="container">
      <cloud></cloud>
      <cloud2></cloud2>
      <cloud3></cloud3>
    </div>
  </div>
</template>

<script>
import Cloud from '../components/clouds/Cloud.vue';
import Cloud2 from '../components/clouds/Cloud2.vue';
import Cloud3 from '../components/clouds/Cloud3.vue';

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
      height: 90vh;

      .scallop {
        background-image: url("assets/scalloped-edge.svg");
        background-color: white;
        height: 3vh;
      }

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

<template>
  <div id="app">
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
  name: 'App'
};
</script>

<style>
  body {
    padding: 0;
    overflow: hidden;
  	height: 500px;
    margin: 0;
    background-color: #54AFAF;
  }
  .container {
    width: 100%;
    position: relative;
    height: 400px;
    overflow: hidden;
    margin: auto;
    margin: 0;
  }
  .container:nth-child(2) {

  }
</style>

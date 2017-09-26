<template>
  <div id="app">
    <div class="container">
      <cloud></cloud>
    </div>
  </div>
</template>

<script>
import Cloud from '../components/Cloud.vue';

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
</style>

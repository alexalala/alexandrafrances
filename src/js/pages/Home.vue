<template>
  <div id="app">
    <navigation></navigation>
    <main-content></main-content>
    <footr></footr>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import MainContent from '../components/MainContent.vue';
import Footr from '../components/Footr.vue';

export default {
  name: 'App'
};
</script>

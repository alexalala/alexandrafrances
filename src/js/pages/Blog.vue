<template>
  <div class="content">
  </div>
</template>

<script>
  export default {
    name: 'Blog'
  };
</script>

<style lang="sass">
  @import "src/styles/components/vars.scss";

  .content {
    background-color: $green;
    height: calc(100vh - 120px);
  }
</style>

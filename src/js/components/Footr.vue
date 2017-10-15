<template>
  <div class="footer">
    <p>&copy; Alexandra Frances 2017</p>
  </div>
</template>

<script>
  export default {
    name: 'Footr'
  }
</script>

<style lang="sass">
  @import "src/styles/components/vars.scss";

  .footer {
    text-align: center;
    background-color: $white;
    p {
      font-family: 'Quicksand', sans-serif;
      color: $red;
    }
  }
</style>

<template>
  <ul>
    <li>Home</li>
    <li>Blog</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="sass">
  ul {
    list-style: none;
    text-align: right;
    margin: 1rem 1rem;
    li {
      display: inline-block;
      margin: 0 1rem;
    }
  }
</style>

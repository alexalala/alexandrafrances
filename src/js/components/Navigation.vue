<template>
  <div class="nav">
    <h1>alexandra frances</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="sass">
  @import "src/styles/components/vars.scss";

  .nav {
    background-color: $white;
    h1 {
      text-align: left;
      font-family: 'Vidaloka', serif;
      display: inline-block;
      color: $red;
      margin: 1rem;
      font-weight: 100;
    }
    ul {
      list-style: none;
      text-align: right;
      margin: 1rem 1rem;
      display: inline;
      float: right;
      line-height: 40px;
      li {
        display: inline-block;
        margin: 0 1rem;
        font-size: 1.2rem;
        font-family: 'Quicksand', sans-serif;
        font-weight: 100;
      }
    }
  }
</style>

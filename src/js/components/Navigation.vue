<template>
  <div>
    <h1>alexandra frances</h1>
    <ul>
      <li>Home</li>
      <li>Blog</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="sass">
  h1 {
    text-align: left;
    font-family: 'Vidaloka', serif;
    display: inline-block;
    color: #FF7B7B;
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
</style>

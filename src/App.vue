<template>
  <Header></Header>
</template>

<script>
  import Header from './components/Header'
  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 62.5%;

  }

  a {
    text-decoration: none;
    color: #2c3e50;
    font-size: 1.4rem;
  }

  #container {
    text-align: center;
    margin: 0 20px;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 30px;
  }

  img {
    width: 200px;
    height: auto;
  }

  h3 {
    color: gray;
    font-size: 1.6rem;
    margin: 3rem 0 1rem;
  }
</style>
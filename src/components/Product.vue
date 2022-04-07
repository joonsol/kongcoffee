<template lang="">
  <div id="container">
    <h2>coffee list</h2>
    <div v-for="(c,i) in coffees" :key="i" class="content">
      <h3>{{c.title}}</h3>
      <img :src="c.image" :alt="c.id">
    </div>
  </div>
</template>
<script>
  import coffee from '../assets/coffee.js'
  export default {
    data() {
      return {
        coffees: coffee
      }
    }
  }
</script>
<style scoped>
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
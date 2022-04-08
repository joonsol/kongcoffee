<template lang="">
  <div id="container">
    <h2>coffee list</h2>
    <div v-for="(c,i) in coffees" :key="i" class="content">
      <h3 @click="modalOpen(i)">{{c.title}}</h3>
      <img @click="modalOpen(i)" :src="c.image" :alt="c.id">
    </div>
    <Modal  :modal="modal" :coffee="coffees" :crt="crt"></Modal>
  </div>
</template>
<script>
  import coffee from '../assets/coffee.js'
  import Modal from './Modal'
  export default {
    data() {
      return {
        modal: false,
        crt:0,
        coffees: coffee
      }
    },
    methods: {
      modalOpen(i) {
        this.modal = true;
        this.crt=i
      }
    },
    components: {
      Modal
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
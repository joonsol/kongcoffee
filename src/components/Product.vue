<template lang="">
  <div id="container">
    <h2>coffee list</h2>
    <div v-for="(c,i) in coffees" :key="i" class="content">
      <h3 @click="modalOpen(i)">{{c.title}}</h3>
      <img @click="modalOpen(i)" :src="c.image" :alt="c.id">
    </div>
    <button class="more" @click="more"> 더보기</button>
    <Modal :modal="modal" :coffee="coffees" :crt="crt" @closeModal="modalClose"></Modal>
  </div>
</template>
<script>
  import axios from 'axios';
  import coffee from '../assets/coffee.js'
  import Modal from './Modal'
  export default {
    data() {
      return {
        modal: false,
        crt: 0,
        coffees: coffee
      }
    },
    methods: {
      modalOpen(i) {
        this.modal = true;
        this.crt = i
      },
      modalClose() {
        this.modal = false;
      },
      more() {
        axios.get(`https://joonsol.github.io/data/more0.json`)
          .then(result => {
            console.log(result)
            this.coffees.push(result.data);
            // this.더보기++;
          })
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

  .more {
    border: none;
    color: rgb(77, 77, 77);
    border-radius: 2rem;
    padding: 0 1rem;
    display: inline-block;
    margin-top: 3rem;
    line-height: 3rem;
    cursor: pointer;
  }
</style>
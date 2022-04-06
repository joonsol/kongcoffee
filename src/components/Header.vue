<template>
  <header>
    header
  </header>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }

  h1 a {
    font-size: 3rem;
    text-transform: uppercase;
  }

  nav a {
    padding: 0 2rem;
  }

  nav a.router-link-active {
    color: blueviolet
  }
</style>
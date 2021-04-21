<template>
  <PassCheck/>
</template>

<script>
import PassCheck from './components/PassCheck.vue';


export default {
  name: "App",
  components: {
    PassCheck
  },
  setup() {

  },
};
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
}

</style>

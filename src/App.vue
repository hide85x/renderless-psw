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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
}
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>

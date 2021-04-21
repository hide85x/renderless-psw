<template>
  <div class="main">
    <h1>super renderless password checker</h1>
    <RenderlessPsw
      :psw="input.psw"
      :confirmPsw="input.confirmPsw"
      v-slot="{ complex, match }"
    >
      <div class="complexBar" :class="complexStyle(complex)"></div>
      <input role="password" type="password" v-model="input.psw" />
      password
      <input role="confirmPassword" type="password" v-model="input.confirmPsw" />
      confirm password
      <div class="complexBar" :class="complexStyle(complex)"></div>
      <button :disabled="match ? disabled : ''">Submit</button>
    </RenderlessPsw>
  </div>
</template>

<script>
import RenderlessPsw from "./renderless-psw";

import { reactive, ref } from "vue";

export default {
  name: "App",
  components: {
    RenderlessPsw,
  },
  setup() {
    const complexStyle = (complex) => {
      if (complex === 3) {
        return "high";
      }
      if (complex === 2) {
        return "medium";
      }
      if (complex === 1) {
        return "low";
      }
    };
    const input = reactive({
      psw: "",
      confirmPsw: "",
    });
    return {
      input,
      complexStyle,
    };
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
.complexBar {
  width: 0%;
  height: 10px;
  margin-top: 20px;
  transition:    0.3s ease;
}
.low {
  height: 10px;
  background: rgba(255, 0, 0, 0.808);
  width: 20%;
}
.medium {
  height: 10px;

  background: #fbff08ce;
  width: 50%;
}
.high {
  height: 10px;
  background: rgba(0, 128, 0, 0.856);
  width: 110%;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: auto;
  width: 400px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 20px 12px rgba(0, 0, 0, 0.171);
}
span {
  text-decoration: underline;
  color: #0055ddd3;
}
input {
  border: none;
  width: 200px;
  height: 40px;
  font-size: 1.2rem;
  padding: 5px;
  text-align: center;
  outline: none;
  border-bottom: 2px solid black;
  background: transparent;
  margin: 10px 0;
}
button {
  border-radius: 10px;
  border: none;
  background: #0055dd;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  margin-top: 20px;
}
button:hover {
  cursor: pointer;
  opacity: 0.7;
}
button:disabled {
  opacity: 0.1;
  cursor: progress;
}
</style>

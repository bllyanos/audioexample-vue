<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <button v-on:click="go">about</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { startLoading } from "../core/Audio";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    go() {
      startLoading();
      this.$router.push("/about");
    }
  }
};
</script>

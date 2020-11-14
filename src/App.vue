<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header/>
    <Todolist/>
  </div>
</template>

<script>

import Todolist from "@/components/Todos/Todolist";
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Todolist,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

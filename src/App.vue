<template>
  <div id="app">
    <div class="actions">
      <router-link to="/login">Login</router-link>
      <router-link to="/bank-statement">Extrato</router-link>
      <router-link to="/deposit">Depositar</router-link>
      <router-link to="/withdraw">Resgatar</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
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
.actions,
.actions a {
  margin: 10px;
}
</style>

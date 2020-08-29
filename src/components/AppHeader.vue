<template>
  <div class="app-header">
    <h4>{{ this.currentUser.fullName}}</h4>
    <div class="bank-info">
      <p>
        <strong>Agência</strong>
      </p>
      <p>{{ this.currentUser.branchNumber }}</p>
      <p>
        <strong>Conta</strong>
      </p>
      <p>{{ this.currentUser.fullAccountNumber }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem("currentUser")),
    };
  },
};
</script>

<style scoped>
.app-header {
  margin: 20px;
  text-align: justify;
  border: 1px solid;
  padding: 0 10px;
}
.app-header .bank-info {
  display: flex;
}
.app-header .bank-info p {
  margin: 0;
  margin-right: 10px;
}
</style>

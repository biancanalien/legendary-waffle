<template>
  <div class="form-login">
    <div>
      <label>Agência</label>
      <input type="text" v-model="branchNumber" />
    </div>

    <div>
      <label>Número da conta com digito</label>
      <input type="text" v-model="fullAccountNumber" />
    </div>

    <button v-on:click="getLogin">Login</button>
  </div>
</template>
<script>
import { errorNotification } from "../utils/notifications";
import accountAPI from "../api/account.api";
import router from "../router";

export default {
  name: "Login",
  data() {
    return {
      branchNumber: "0001",
      fullAccountNumber: "784863-0",
    };
  },
  methods: {
    async getLogin() {
      localStorage.setItem("currentUser", null);
      localStorage.setItem("token", null);

      const fakeToken = `fakeToken&${this.fullAccountNumber}&${this.branchNumber}`;
      localStorage.setItem("token", fakeToken);

      accountAPI
        .getAccount()
        .then(({ data }) => {
          router.push("bank-statement");
          localStorage.setItem("currentUser", JSON.stringify(data));
        })
        .catch((e) => {
          const message =
            (e.response && e.response.data) ||
            "Erro ao tentar realizar o login. Tente novamente em outro momento!";
          errorNotification(message);
          router.push("login");
          localStorage.setItem("currentUser", null);
          localStorage.setItem("token", null);
        });
    },
  },
};
</script>

<style scoped>
.form-login {
  margin: 20px;
  text-align: justify;
}
.form-login > div,
.form-login > div > label {
  margin-right: 5px;
}
</style>
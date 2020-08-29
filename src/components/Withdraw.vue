<template>
  <div>
    <AppHeader/>
    <div class="form-withdraw">
      <div>
        <label>Valor do resgate R$</label>
        <input type="text" v-model="value" />
      </div>

      <h3>Instituição financeira de origem do resgate</h3>

      <div>
        <label>Nome da instituição</label>
        <input type="text" v-model="companyName" />
      </div>
      <div>
        <label>CNPJ</label>
        <input type="text" v-model="cnpj" />
      </div>

      <button v-on:click="saveWithdraw">Realizar resgate</button>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
import { sucessNotification, errorNotification } from "../utils/notifications";
import withdrawAPI from "../api/withdraw.api";

export default {
  name: "Withdraw",
  components: {
    AppHeader,
  },
  data() {
    return {
      value: 100.55,
      companyName: "Banco 24 Horas",
      cnpj: "24.363.105/0001-73",
    };
  },
  methods: {
    async saveWithdraw() {
      const newWithdraw = {
        value: this.value,
        financialInstitution: {
          companyName: this.companyName,
          cnpj: this.cnpj,
        },
      };

      withdrawAPI
        .save(newWithdraw)
        .then((response) => {
          sucessNotification(`Resgate realizado com sucesso! Novo Saldo: ${response.data.currentBankingAccount.availableBalance}`);
        })
        .catch((e) => {
          const message =
            (e.response && e.response.data) ||
            "Erro ao salvar resgate. Tente novamente em outro momento!";
          errorNotification(message);
        });
    },
  },
};
</script>

<style scoped>
.form-withdraw {
  margin: 20px;
  text-align: justify;
}
.form-withdraw > div,
.form-withdraw > div > label {
  margin: 5px 5px 5px 0;
}
</style>

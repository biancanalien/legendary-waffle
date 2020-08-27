<template>
  <div class="form-withdraw">
    <div>
      <label>Valor do resgate R$</label>
      <input type="text" v-model="value" />
    </div>

    <h3>Conta a ser feito o resgate</h3>

    <div>
      <label>Agência</label>
      <input type="text" v-model="branchNumber" />
    </div>

    <div>
      <label>Número da conta com digito</label>
      <input type="text" v-model="fullAccountNumber" />
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
</template>

<script>
import { sucessNotification, errorNotification } from "../utils/notifications";
import withdrawAPI from "../api/withdraw.api";

export default {
  name: "Withdraw",
  data() {
    return {
      value: 100.55,
      branchNumber: "0001",
      fullAccountNumber: "543190-0",
      companyName: "Banco 24 Horas",
      cnpj: "24.363.105/0001-73",
    };
  },
  methods: {
    async saveWithdraw() {
      const newWithdraw = {
        value: this.value,
        branchNumber: this.branchNumber,
        fullAccountNumber: this.fullAccountNumber,
        financialInstitution: {
          companyName: this.companyName,
          cnpj: this.cnpj,
        },
      };

      withdrawAPI
        .save(newWithdraw)
        .then(() => {
          sucessNotification("Resgate realizado com sucesso!");
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
  margin: 5px;
}
</style>

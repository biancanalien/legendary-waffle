<template>
  <div class="form-bank-statement">
    <div>
      <label>Agência</label>
      <input type="text" v-model="branchNumber" />
    </div>

    <div>
      <label>Número da conta com digito</label>
      <input type="text" v-model="fullAccountNumber" />
    </div>

    <button v-on:click="getBankStatement">Visualizar extrato</button>
    <div class="bank-statement-result">
      <div v-for="(operation, i) in this.bankStatementList" :key="i">
        <p>
          <strong>{{operation.transactionType === "DP" ? "Depósito realizado" : "Resgate realizado"}}</strong>
        </p>
        <p>{{operation.labelDescription}}</p>
        <p>{{operation.actionType === "D" ? `- R$${operation.value}` : `R$${operation.value}`}}</p>
        <p>{{operation.date}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { errorNotification } from "../utils/notifications";
import bankStatementAPI from "../api/bankStatement.api";

export default {
  name: "BankStatement",
  data() {
    return {
      branchNumber: "0001",
      fullAccountNumber: "543190-0",
      bankStatementList: [],
    };
  },
  methods: {
    async getBankStatement() {
      const newFilter = {
        branchNumber: this.branchNumber,
        fullAccountNumber: this.fullAccountNumber,
      };

      bankStatementAPI
        .getOperations(newFilter)
        .then(({ data }) => {
          this.bankStatementList = data;
        })
        .catch((e) => {
          const message =
            (e.response && e.response.data) ||
            "Erro ao tentar carregar extrato. Tente novamente em outro momento!";
          errorNotification(message);
          this.bankStatementList = [];
        });
    },
  },
};
</script>

<style scoped>
.form-bank-statement {
  margin: 20px;
  text-align: justify;
}
.form-bank-statement > div,
.form-bank-statement > div > label {
  margin: 5px;
}
</style>
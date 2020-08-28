<template>
  <div class="form-bank-statement">
    <button v-on:click="getBankStatement">Visualizar extrato</button>
    <div class="bank-statement-result">
      <div v-for="(operation, i) in this.bankStatementList" :key="i">
        <p>
          <strong>{{operation.transactionType === "DP" ? "Depósito realizado" : "Resgate realizado"}}</strong>
        </p>
        <p>{{operation.labelDescription}}</p>
        <p>{{operation.actionType === "D" ? `- ${operation.value}` : operation.value}}</p>
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
      bankStatementList: [],
    };
  },
  methods: {
    async getBankStatement() {
      bankStatementAPI
        .getOperations()
        .then(({ data }) => {
          console.log("data", data);
          this.bankStatementList = data.bankStatementResult;
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
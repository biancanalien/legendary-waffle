<template>
  <div>
    <AppHeader />
    <div class="form-bank-statement">
      <div class="bank-statement-result">
        <div>
          <p>
            <strong>Saldo disponível:</strong>
          </p>
          <h3>{{ this.balance }}</h3>
        </div>
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
  </div>
</template>
<script>
import AppHeader from "./AppHeader";
import { errorNotification } from "../utils/notifications";
import bankStatementAPI from "../api/bankStatement.api";

export default {
  name: "BankStatement",
  components: {
    AppHeader,
  },
  data() {
    return {
      balance: 0,
      bankStatementList: [],
    };
  },
  created() {
    this.getBankStatement();
  },
  methods: {
    async getBankStatement() {
      bankStatementAPI
        .getOperations()
        .then(({ data }) => {
          this.balance = data.currentBankingAccount.availableBalance;
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
  margin: 5px 5px 5px 0;
}
</style>
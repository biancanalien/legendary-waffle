<template>
  <div class="form-deposit">
    <div>
      <label>Tipo do depósito (TED, DOC ou BLT)</label>
      <input type="text" v-model="depositType" />
    </div>

    <div>
      <label>Valor do depósito R$</label>
      <input type="text" v-model="value" />
    </div>

    <h3>Origem do depósito em caso de TED ou DOC</h3>

    <div>
      <label>Nome do banco</label>
      <input type="text" v-model="bankName" />
    </div>
    <div>
      <label>Número do banco</label>
      <input type="text" v-model="bankNumber" />
    </div>
    <div>
      <label>Agência</label>
      <input type="text" v-model="psBranchNumber" />
    </div>

    <div>
      <label>Número da conta com digito</label>
      <input type="text" v-model="psFullAccountNumber" />
    </div>
    <div>
      <label>Nome do titular da conta</label>
      <input type="text" v-model="clientName" />
    </div>

    <button v-on:click="saveDeposit">Realizar o depósito</button>
  </div>
</template>

<script>
import { sucessNotification, errorNotification } from "../utils/notifications";
import depositAPI from "../api/deposit.api";

export default {
  name: "Deposit",
  data() {
    return {
      depositType: "DOC",
      value: 335.45,
      bankName: "Banco Raiz",
      bankNumber: "123",
      psBranchNumber: "2345",
      psFullAccountNumber: "654321-0",
      clientName: "José Maria Silva",
    };
  },
  methods: {
    async saveDeposit() {
      const newDeposit = {
        depositType: this.depositType,
        value: parseInt(this.value),
        payingSource: {
          bankName: this.bankName,
          bankNumber: this.bankNumber,
          branchNumber: this.psBranchNumber,
          fullAccountNumber: this.psFullAccountNumber,
          clientName: this.clientName,
        },
      };

      depositAPI
        .save(newDeposit)
        .then(() => {
          sucessNotification("Depósito realizado com sucesso!");
        })
        .catch((e) => {
          const message =
            (e.response && e.response.data) ||
            "Erro ao salvar depósito. Tente novamente em outro momento!";
          errorNotification(message);
        });
    },
  },
};
</script>

<style scoped>
.form-deposit {
  margin: 20px;
  text-align: justify;
}
.form-deposit > div,
.form-deposit > div > label {
  margin: 5px;
}
</style>

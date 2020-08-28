import httpClient from './httpClient';

const endpoint = '/bank-statement';

const bankStatementAPI = {
    async getOperations(params) {
        return await httpClient.get(endpoint, { params });
    }
};

export default bankStatementAPI;

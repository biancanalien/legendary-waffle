import httpClient from './httpClient';

const endpoint = '/operation/deposit';

const depositAPI = {
    async save(newDeposit) {
        return await httpClient.post(endpoint, newDeposit);
    }
};

export default depositAPI;

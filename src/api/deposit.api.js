import httpClient from './httpClient';

const endpoint = '/account/deposit';

const depositAPI = {
    async save(newDeposit) {
        return await httpClient.post(endpoint, newDeposit);
    }
};

export default depositAPI;

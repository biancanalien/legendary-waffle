import httpClient from './httpClient';

const endpoint = '/account/withdraw';

const withdrawAPI = {
    async save(newWithdraw) {
        return await httpClient.post(endpoint, newWithdraw);
    }
};

export default withdrawAPI;

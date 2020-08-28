import httpClient from './httpClient';

const endpoint = '/account';

const accountAPI = {
    async getAccount() {
        return await httpClient.get(`${endpoint}/me`);
    }
};

export default accountAPI;
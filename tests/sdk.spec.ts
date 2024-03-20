import { describe } from 'mocha';
import { expect } from 'chai';
import { ServerSDK } from '../src/generated/swagger/api';

describe('# SDK Tests', () => {

    it('Test simple operation', async () => {
        const serverSDK = new ServerSDK();
        const greeting = 'hello';
        const res = await serverSDK.StatusApi.ping(greeting, { whois: 'me' });
        expect(res.greeting).be.equal(greeting)
    });
});

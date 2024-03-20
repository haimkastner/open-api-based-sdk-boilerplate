// export * from './generated/swagger/api';


import { ServerSDK } from './generated/swagger/api';


(async () => {

    try {
        const serverSDK = new ServerSDK();
        const res = await serverSDK.StatusApi.ping('hello', { whois: 'c' });

        console.log(res.greeting)
        console.log(res.time)
    } catch (error) {
        console.log('error')
        const response = error as any;
        const r = await response.text();
        console.log(r)
    }


})();
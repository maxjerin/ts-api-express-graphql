// import axios from 'axios';

const user = {
    login: (username: string, password: string) => {
        const encoding = btoa(`${username}:${password}`);
        const auth = `Basic ${encoding}`;

        const url = 'https://ny-tunnel.uatdev.tradingscreen.com/api/im/products/?isin=US0378331005&venue=NSQ';

        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: auth,
            }
        }).then((response: any) => {
            console.warn(response.json());
            return response.json();
        }).catch((error: any) => {
            console.warn(error);
            return error;
        });

        // axios.request({
        //     method: 'get',
        //     // url: 'https://ny-tunnel.uatprod.tradingscreen.com:443/api/',
        //     url: 'https://ny-tunnel.uatdev.tradingscreen.com:443/api/im/products/?isin=US0378331005&venue=NSQ',
        //     auth: {
        //         username: username,
        //         password: password
        //     },
        //     headers: {
        //         'Cache-Control': 'no-cache',
        //         'Content-Type': 'application/json',
        //     }
        // }).then((response: any) => {
        //     return response;
        // }).catch((error: any) => {
        //     console.warn(error)
        // })
    },
};

export { user };
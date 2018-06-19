import axios from 'axios';

const user = {
    login: (username: string, password: string) => {
        // const encoding = btoa(`${username}:${password}`);

        axios.request({
            method: 'get',
            // url: 'https://ny-tunnel.uatprod.tradingscreen.com:443/api/',
            url: 'https://ny-tunnel.uatdev.tradingscreen.com:443/api/im/products/?isin=US0378331005&venue=NSQ',
            auth: {
                username: username,
                password: password
            },
            headers: {
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.warn(error)
        })
    },
};

export { user };
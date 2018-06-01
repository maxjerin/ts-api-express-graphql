const fetch = require('node-fetch');

const searchProducts = {
  byRic: (ric) => {
    return fetch(`http://localhost:3000/products/?ric=${ric}`)
        .then(res => res.json());
  },

  byIsin: (isin) => {
    return fetch(`http://localhost:3000/products?isin=${isin}`)
        .then(res => res.json());
  },
};

const searchOrders = {
  byId: (id) => {
    return fetch(`http://localhost:3000/orders/${id}`)
        .then(res => res.json());
  },

  byTSOrderIs: (tsOrderId) => {
    return fetch(`http://localhost:3000/orders/?order_ts_id=${order_ts_id}`)
        .then(res => res.json());
  },
}

module.exports = {
  searchProducts,
  searchOrders,
};
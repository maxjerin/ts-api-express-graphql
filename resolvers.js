const { searchProducts, searchOrders } = require('./services');

const orderResolvers = {
  Query: {
    getOrderById: (root, { id }, context) => {
      return searchOrders.byId(id);
    },
    getOrderByOrderTSId: (root, { order_ts_id }, context) => {
      return searchOrders.byTSOrderIs(order_ts_id);
    },
  },
  Order: {
    id: order => order.id,
    sourceId: order => order.sourceId,
    exchange: order => order.exchange,
    price: order => order.price,
    instrument: order => order.instrument,
    quantity: order => order.quantity,
    executingBroker: order => order.executingBroker,
    orderSide: order => order.orderSide,
    orderType: order => order.orderType,
    assetClass: order => order.assetClass,
    orderState: order => order.orderState,
  }
};

const productResolvers = {
  Query: {
    getProductByIsin: (root, { isin }, context) => {
      return searchProducts.byIsin(isin)
        .then(products => {
          return products.map((product) => {
            return {
              tsMarketId: product.tsMarketId,
              isin: product.isin,
            };
          });
        });
    },
    getProductByRIC: (root, { ric }, context) => {
      return searchProducts.byRic(ric);
    },
  },
  Product: {
    isin: product => product.isin,
    tsMarketId: product => product.tsMarketId,
  }
};

module.exports = {
  productResolvers,
  orderResolvers,
}
const { mergeSchemas, makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');
const { products, orders } = require('./services');
const orderTypeDefs = importSchema('ts-api-order.graphql');
const productTypeDefs = importSchema('ts-api-product.graphql');

const productResolvers = {
  Query: {
    getProductByIsin: (root, { isin }, context) => {
      return products.byIsin(isin)
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
      return products.byRic(ric);
    },
  },
  Product: {
    isin: product => product.isin,
    tsMarketId: product => product.tsMarketId,
  }
};

const orderResolvers = {
  Query: {
    getOrderById: (root, { id }, context) => {
      return orders.byId(id);
    },
    getOrderByOrderTSId: (root, { order_ts_id }, context) => {
      return orders.byTSOrderIs(order_ts_id);
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

const productSchema = makeExecutableSchema({
  typeDefs: productTypeDefs,
  resolvers: productResolvers,
});

const orderSchema = makeExecutableSchema({
  typeDefs: orderTypeDefs,
  resolvers: orderResolvers,
});

const schema = mergeSchemas({
  schemas: [
    orderSchema,
    productSchema,
  ]
});

module.exports = { schema };

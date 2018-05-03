const { makeExecutableSchema } = require('graphql-tools');
const fetch = require('node-fetch');
const { importSchema } = require('graphql-import');

const gql = String.raw;

const typeDefs = importSchema('ts-api.graphql');

const resolvers = {
  Query: {
    
    getProductByIsin: (root, args, context) => {
      const { isin } = args;
      return fetch(`http://localhost:3000/products?isin=${isin}`)
        .then(res => res.json())
        .then(products => {
          return products.map((product) => { 
            return {
              tsMarketId: product.tsMarketId,
              isin: product.isin,
            }
          })
        });
    },

    getOrderById: (root, args, context) => {
      const { id } = args;
      return fetch(`http://localhost:3000/orders/${id}`)
        .then(res => res.json());
    }
  },

  Product: {
    isin: product => product.isin,
    tsMarketId: product => product.tsMarketId,
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

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = { schema };
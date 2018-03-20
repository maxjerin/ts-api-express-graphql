const { makeExecutableSchema } = require('graphql-tools');
const fetch = require('node-fetch');

const gql = String.raw;

const typeDefs = gql`
  type Query {
    getProductByIsin(isin: String): [Product]
    getOrderById(id: ID): [Order]
  }

  type Order {
    id: ID
    sourceId: String
    exchange: String
    price: Int
    instrument: String
    quantity: Float
    executingBroker: String
    orderSide: String
    orderType: String
    assetClass: String
    orderState: String
  }

  type Product {
    tsMarketId: Int
    isin: String
  }
`;

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
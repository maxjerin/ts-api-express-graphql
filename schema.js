const { makeExecutableSchema } = require('graphql-tools');
const fetch = require('node-fetch');

const gql = String.raw;

const typeDefs = gql`
  type Query {
    getProductByIsin(isin: String): [Product]
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
    }
  },
  Product: {
    isin: product => product.isin,
    tsMarketId: product => product.tsMarketId,
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = { schema };
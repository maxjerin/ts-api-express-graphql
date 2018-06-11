const { importSchema } = require('graphql-import');
const { 
  mergeSchemas, 
  makeExecutableSchema 
} = require('graphql-tools');
const { 
  orderResolvers, 
  productResolvers 
} = require('./resolvers');
const orderTypeDefs = importSchema('ts-api-order.graphql');
const productTypeDefs = importSchema('ts-api-product.graphql');

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

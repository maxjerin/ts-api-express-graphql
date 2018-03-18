const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const bodyParser = require("body-parser");
const { ApolloEngine } = require("apollo-engine");
require('dotenv').config();

const { schema } = require("./schema");

const app = express();

app.post(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    tracing: true,  
  })
);

app.get(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
  })
);

if (process.env.ENGINE === 'EXPRESS') {
  console.log('Starting Express Server');
  app.listen(4000);
}

if (process.env.ENGINE === 'APOLLO') {
  console.log('Starting Apollo Engine');
  const engine = new ApolloEngine({
    apiKey: process.env.APOLLO_ENGINE_API_KEY,
    stores: [
      {
        name: "publicResponseCache",
        inMemory: {
          cacheSize: 10485760
        }
      }
    ],
    queryCache: {
      publicFullQueryStore: "publicResponseCache"
    }
  });
  
  engine.listen(
    {
      port: 4000,
      expressApp: app
    },
    () => {
      console.log(`Go to http://localhost:4000/graphiql to run queries!`);
    }
  );
}
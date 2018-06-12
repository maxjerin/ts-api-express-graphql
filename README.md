# TS API using Apollo-GraphQL and ExpressJS
### https://api.tradingscreen.com
### Start Graphql Server

* Start the mock server and graphql server together
* Run `yarn start`
* Go to `http://localhost:4000/graphiql`
    * Run the follow on left hand side of GraphiQL UI
* Run Graphql Query
```
{
    getProductByIsin(isin: "JP3735400008") {
        tsMarketId
        isin
    }
}
```
* Run Graphql Mutation
```
mutation {
  createOrder(input: { id: "12"}) {
    tsMarketId
  }
}
```

### Mock Server

* Run `yarn mock-server` to run mock product server inde
    * Access products using `http://localhost:3000/products`
    * Search products using `http://localhost:3000/products?tsMarketId=<id>`
    * Access eodprice using `http://localhost:3000/eodprice`


### Apollo Engine

* You could optionally create Apollo Engine account to check query performance
    * Update the `.env` file with you Apollo Engine API Key
    * And set `ENGINE = 'APOLLO'` in the `.env` file
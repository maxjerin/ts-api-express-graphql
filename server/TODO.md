### Tasks
* [ ] graphql mutation to create an order
    * Create Order
        * [POST] https://ny-tunnel.uatprod.tradingscreen.com:443/api/om/v2/equity
        ```
        [{ 
         'correlation_id': 'CID1', 
         'executing_broker': 'TS-SS', 
         'instrument': { 
           'instrument_code': 'VOD.L', 
           'instrument_code_type': 'RIC' 
         }, 
         'order_type': 'LIMIT', 
         'price': 99, 
         'quantity': 1000, 
         'reference1': 'REF1', 
         'reference2': 'REF2', 
         'side': 'BUY' 
        }]
        ```
* [ ] graphql query to retrieve create order/portfolio
    * Retrieve Order
        * [GET] https://ny-tunnel.uatprod.tradingscreen.com:443/api/om/v2/equity
        * `order_ts_id `
* [ ] stitch schema such that we can make the following call
    ```
    {
      getOrderById(ts_order_id: "SOMEID") {
        tsMarketId
        isin
        product {
          venueId
          ticker
        }
      }
    }
    ```
    * https://www.apollographql.com/docs/graphql-tools/schema-stitching.html
    * https://www.apollographql.com/docs/react/advanced/fragments.html
    * https://www.apollographql.com/docs/graphql-tools/schema-transforms.html

### Main use cases for GraphQL
* Lookup an order (with selective fields), and along with it its the associated Product (again with selective fields).

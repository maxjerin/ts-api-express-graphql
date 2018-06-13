## Responses

#### Create Order
##### Request
Type: POST
`https://ny-tunnel.uatdev.tradingscreen.com:443/api/om/v2/equity`

```
[{
	"executing_broker": "TS-SS",
	"instrument": {
		"instrument_code": "AAPL.O",
		"instrument_code_type": "RIC"
	},
	"order_type": "LIMIT",
	"price": 99,
	"quantity": 1000,
	"side": "BUY"
}]
```

##### Response
```
[
    {
        "alternate_owner": "jmathew",
        "creation_date": "2018-05-03T16:36:24.647Z",
        "deactivation_date": "2018-05-04T02:36:24.647Z",
        "done_for_day": false,
        "errant_quantity": 0,
        "executed_quantity": 0,
        "executed_value": 0,
        "executing_broker": "TS-SS",
        "fully_executed": false,
        "instrument_code": "AAPL.O",
        "instrument_code_type": "RIC",
        "instrument_ts_id": "122110",
        "leaves_quantity": 1000,
        "order_ts_id": "20180503-163624599_55",
        "order_type": "LIMIT",
        "outstanding_quantity": 0,
        "owner": "jmathew",
        "price": 99,
        "quantity": 1000,
        "released_quantity": 0,
        "settlement_currency": "USD",
        "settlement_date": "2018-05-08T16:00:00.000Z",
        "side": "BUY",
        "state": "REGISTERED",
        "strategy_state": "NONE",
        "unexecuted_quantity": 1000,
        "uuid": 189655631428
    }
]
```

#### Request Order
##### Request
Type: GET
`https://ny-tunnel.uatdev.tradingscreen.com:443/api/om/v2/equity/?order_ts_id=20180503-163624599_55`

##### Response
```
[
    {
        "alternate_owner": "jmathew",
        "creation_date": "2018-05-03T16:36:24.647Z",
        "deactivation_date": "2018-05-04T02:36:24.647Z",
        "done_for_day": false,
        "errant_quantity": 0,
        "executed_quantity": 0,
        "executed_value": 0,
        "executing_broker": "TS-SS",
        "fully_executed": false,
        "instrument_code": "AAPL.O",
        "instrument_code_type": "RIC",
        "instrument_ts_id": "122110",
        "leaves_quantity": 1000,
        "order_ts_id": "20180503-163624599_55",
        "order_type": "LIMIT",
        "outstanding_quantity": 0,
        "owner": "jmathew",
        "price": 99,
        "quantity": 1000,
        "released_quantity": 0,
        "settlement_currency": "USD",
        "settlement_date": "2018-05-08T16:00:00.000Z",
        "side": "BUY",
        "state": "REGISTERED",
        "strategy_state": "NONE",
        "unexecuted_quantity": 1000,
        "uuid": 189655631428
    }
]
```

#### Request Product
##### Request
Type: GET
`https://ny-tunnel.uatdev.tradingscreen.com:443/api/im/products/?ric=AAPL.O`

##### Response
```
[
    {
        "tsMarketId": 122110,
        "source": "IM",
        "tsCode": "EQ AAPL",
        "venueId": "NSQ",
        "subVenueId": "15",
        "currency": "USD",
        "description": "Apple Rg",
        "industryClass": "Computer hardware & networking",
        "multiplier": 100,
        "contractSize": 100,
        "productId": 1950782,
        "instrumentId": 2293049987,
        "marketId": 53486600,
        "marketVenueId": 2297128509,
        "cfiCode": "ESVUFR",
        "ticker": "AAPL",
        "tsTicker": "AAPL",
        "ric": "AAPL.O",
        "bloomberg": "AAPL US",
        "bloombergPlusYellowKey": "AAPL US Equity",
        "isin": "US0378331005",
        "comstock": "AAPL",
        "quick": null,
        "cusip": "037833100",
        "sedol": "2046251",
        "valoren": "908440",
        "wkn": "865985",
        "venue": null,
        "active": true,
        "assetClass": "Equity",
        "eodprices": [
            {
                "tradeDate": 20180502,
                "source": "OneTick",
                "branchId": "",
                "bid": null,
                "ask": null,
                "askBidMid": null,
                "high": 177.75,
                "low": 173.8,
                "open": 175.225,
                "close": 176.57,
                "volume": 56227275,
                "last": null,
                "lastSize": null,
                "vwap": null,
                "tsmarketPriceId": 186500072,
                "tsmarketId": 122110
            }
        ]
    }
]
```
## Graphql

#### mergeSchema
* used to merge multiple schemas together
* schemas can be either present locally or generated from remote graphql api
* when schemas are remote, we use introspection and makeRemoveExecutableSchema
* mergeSchema allows us to do things like extending existing type using 
```
extend type Product {
 partOfProduct: [Product]
}
```
* resolvers of mergeSchema can forward parts of queries to one of the subschemas that was passed to mergeSchema
  * this is done using `info.mergeInfo.deleteToSchema`

#### graphql-import
* graphql-import npm module can be used to import typeDefs
* this allows for between code readability as we can separate Query and type definitions

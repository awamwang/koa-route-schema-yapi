# koa-route-schema-yapi

yapi export to koa-route-schema schemaOptions

## Usage

```js
import RouteSchema from 'koa-route-schema'
import yapiParseOptions from 'koa-route-schema-yapi'
import yapiSchemaOptions from './schemaOptions'

export default function attachSchema(router) {
  let routeschema = RouteSchema({
    ...yapiParseOptions,
    prefix: 'v1',
    schemaOptions: yapiSchemaOptions
  })
  routeschema.attachToRouter(router)
}
```

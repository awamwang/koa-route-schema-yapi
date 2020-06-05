const RouteSchema = require('koa-route-schema')
const yapiParseOptions = require('../index')
const yapiSchemaOptions = require('./schemaOptions')

const routeschema = new RouteSchema({
  ...yapiParseOptions,
  prefix: 'v1',
  schemaOptions: yapiSchemaOptions
})
module.exports = routeschema

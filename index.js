module.exports = {
  parseSchemaOptions: function(options) {
    if (Array.isArray(options)) {
      return options[0].list
    } else {
      return o.list
    }
  },
  getRoute: function(o) {
    return o.query_path.path
  },
  getBodySchema: function(o) {
    return o.req_body_is_json_schema && o.req_body_other
  },
}
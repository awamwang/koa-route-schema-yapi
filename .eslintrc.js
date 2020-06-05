module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'eslint-config-standard',
  rules: {
    semi: 0,
    'no-multiple-empty-lines': 0,
    'no-new': 0,
    'padded-blocks': 0,
    'space-before-function-paren': 0,
    'standard/no-callback-literal': 0
  }
}

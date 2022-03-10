// based of bluestone/.eslintrc
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  extends: ['plugin:prettier/recommended', 'plugin:vue/essential', 'prettier'],
  plugins: ['import'],
  rules: {
    'vue/no-unused-components': 'off',
  },
};

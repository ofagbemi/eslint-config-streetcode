module.exports = {
  extends: 'airbnb',
  node: true,
  parser: 'babel-eslint',
  rules: {
    'new-cap': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'prefer-rest-params': 'off'
  },
};

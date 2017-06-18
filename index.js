module.exports = {
  extends: 'airbnb',
  node: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  globals: {
    React: true,
  },
  rules: {
    'new-cap': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'prefer-rest-params': 'off',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'arrow-parens': ['error', 'as-needed'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
  },
};

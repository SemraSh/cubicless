module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: __dirname + '/webpack/webpack.development.config.js',
      },
    },
  },
  parser: 'babel-eslint',
  rules: {
    'no-control-regex': 0,
    'global-require': 0,
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'storage',
          'render',
          'componentDidMount',
          'shouldComponentUpdate',
        ],
      },
    ],
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prettier/prettier': 0,
    'react/prop-types': 0,
    'sort-keys': 0,
  },
}

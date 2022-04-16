module.exports = {
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
  },
  globals: {
    Action: true,
    NProgress: true,
    StripeButton: true,
    StripeCheckout: true,
  },
  rules: {
    'no-console': 'off',
    'react/jsx-key': 'error',
    'react/display-name': ['error', { ignoreTranspilerName: true }],
    'react/prefer-es6-class': 'off',
    'react/no-string-refs': 'off',
    'react/forbid-prop-types': 'off',
    'class-methods-use-this': 'off',
    'react/no-array-index-key': 'off',
    'newline-per-chained-call': ["error", { ignoreChainWithDepth: 1 }],
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      ArrayExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      }
    }],
    'react/require-default-props': 'off',
    'react/no-will-update-set-state': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default-member': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/label-has-for': 'off',
    'space-before-function-paren': ['error', 'always'],
    'no-use-before-define': ['error', { functions: false }],
    'func-names': 'error',
    curly: ['error', 'all'],
    'arrow-parens': ['error', 'always'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'brace-style': ["error", "1tbs"],
    'no-underscore-dangle': 'off',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
  }
};

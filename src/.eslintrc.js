module.exports = {
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-multi-assign': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    // 'no-console': 1,
    camelcase: 0,
    'no-script-url': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-target-blank': 0,
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'css',
      },
    ],
  },
  ignorePatterns: ['serviceWorker.js'],
};

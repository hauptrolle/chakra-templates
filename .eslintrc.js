// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true,
    es2024: true,
    jest: true,
  },
  globals: {
    React: true,
  },
  extends: ['next', 'prettier'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 15,
  },
  overrides: [
    {
      files: ['**/*.[ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
    },
    {
      files: ['**/*.[jt]s?(x)'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jsx-a11y/recommended',
      ],
      plugins: ['jsx-a11y', 'chakra-ui'],
    },
    {
      // Only uses Testing Library lint rules in test files
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/recommended', 'plugin:testing-library/react'],
      plugins: ['jest', 'testing-library'],
    },
  ],
  rules: {
    'prettier/prettier': 'warn',
  },
}
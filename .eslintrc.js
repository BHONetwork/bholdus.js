module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
};

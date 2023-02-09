module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-uses-react': 'off', //import React from 'react'的强制引入,  是针对react17后不需要强制引入
    'react/react-in-jsx-scope': 'off', // 同上
    '@typescript-eslint/no-var-requires': 'off', // 禁止对require来定义， 但是node上很多依赖没有对es module的定义， 所以关闭这条lint
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

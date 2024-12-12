module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier', 'simple-import-sort'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // React after version 17 does not require React to be imported due to new JSX transform
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_$', argsIgnorePattern: '^_' },
    ],
    'no-unused-vars': 'off', // Disable base rule, TypeScript plugin handles it
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$', '^react-dom$'], // React imports first
          ['^@?\\w'], // External third-party packages
          ['^'], // Global imports
          ['^\\.'], // Local imports
        ],
      },
    ],
    'simple-import-sort/exports': ['error'],
    'import/order': 'off', // Avoid conflicts with `simple-import-sort` plugin
    'sort-imports': 'off', // Avoid conflicts with `simple-import-sort` plugin
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^[A-Z][A-Za-z]*$', // Ignores capitalized variables (like enums)
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-unused-vars': 'off', // Turn off the base rule as it can report incorrect errors
  },
};

const eslintPluginReact = require('eslint-plugin-react');

module.exports = [
  {
    files: ['src/**/*.{js,jsx}'],
    plugins: { react: eslintPluginReact },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  }
];

import eslintPluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['src/**/*.{js,jsx}'],
    plugins: { react: eslintPluginReact },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  }
];

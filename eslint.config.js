import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');


export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:prettier/recommended',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': require('eslint-plugin-prettier'),
    },
    
    rules: {
      "no-duplicate-imports": "warn",
      "no-use-before-define": "warn",
      "no-useless-assignment": "warn",
      "require-atmoic-updates": "warn",
      "block-scoped-var": "warn",
      "eqeqeq": "warn",
      "no-empty-function": "warn",
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    
  },
)

import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginNext from '@next/eslint-plugin-next'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-duplicate-imports': 'error',
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules
    }
  },
  {
    plugins: {
      '@next/next': pluginNext
    }
  },
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ignores: ['.storybook', '.jest', 'generators', 'commitlint.config.js']
  }
]

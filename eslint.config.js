import js from '@eslint/js'
import globals from 'globals'
import vue from 'eslint-plugin-vue'

export default [
  { ignores: ['dist', '.netlify', 'netlify'] },
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]

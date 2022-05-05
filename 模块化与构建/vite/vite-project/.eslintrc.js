module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'airbnb-base',
    'plugin:vue/vue3-essential',
    'prettier/vue',
    'plugin:prettier/recommended'
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  "rules": {
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    "vue/component-name-in-template-casing": ["error", "kebab-case", {
      "ignores": []
    }],
    'prettier/prettier': ['error', { 'singleQuote': true, 'endOfLine': 'auto' }]
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  }
}
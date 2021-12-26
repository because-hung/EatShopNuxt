module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: { 'nuxt/no-cjs-in-config': 'off',
  'no-console': 'off',
  'no-debugger': 'off',
  'no-unused-expressions': 'off',
  'vue/no-v-html': 'off',
  'vue/multi-word-component-names': 0}
}

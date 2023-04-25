/** @type {import('prettier').Config} */
module.exports = exports = {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  jsxSingleQuote: true,
  trailingComma: 'all',
  htmlWhitespaceSensitivity: 'ignore',
  singleAttributePerLine: true,
  plugins: [require('prettier-plugin-svelte'), require('prettier-plugin-tailwindcss')],
}

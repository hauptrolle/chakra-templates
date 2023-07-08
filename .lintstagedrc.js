/* eslint-disable no-undef */
/** @type{import('lint-staged').Config}*/
module.exports = {
  '**/*.{ts,tsx}': ["eslint --config .eslintrc.js --ext .ts --ext .tsx --fix"]
}
/* eslint-disable no-undef */
/** @type{import('lint-staged').Config}*/
module.exports = {
  '**/*.{js,ts,tsx}': ["eslint . --config .eslintrc.js --ext .js,.ts,.tsx --fix"]
}
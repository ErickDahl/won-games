export default {
  // Lint & Prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `yarn run lint --fix`,
    `yarn test -- --findRelatedTests ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`
  ]
}

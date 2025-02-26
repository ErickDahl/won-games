import { dirname, join } from 'path'
import type { StorybookConfig } from '@storybook/nextjs'

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    '@chromatic-com/storybook'
  ],

  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {}
  },

  staticDirs: ['..\\public'],

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}
export default config

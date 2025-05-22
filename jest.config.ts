/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    },
     
  },
  moduleNameMapper: {
    // Добавить поддержку scss
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
};

export default config;

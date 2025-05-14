/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  collectCoverage: true,
  coverageProvider: "v8",
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  // A map from regular expressions to paths to transformers
  transform: {
        // '^.+\\.[tj]sx?$' для обработки файлов js/ts с помощью `ts-jest`
        // '^.+\\.m?[tj]sx?$' для обработки файлов js/ts/mjs/mts с помощью `ts-jest`
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            // настройки для ts-jest
          },
        ],
      }
};

export default config;

// // jest.config.ts
// import type { JestConfigWithTsJest } from 'ts-jest';

// const jestConfig: JestConfigWithTsJest = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
// };

// export default jestConfig;

// import type { Config } from '@jest/types';

// const config: Config.InitialOptions = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// };

// export default config;
import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
   },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [' /node_modules/']
};

export default config;
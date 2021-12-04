module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*.spec.ts'],
  testEnvironment: 'node',
  // globalSetup:
  //   '/Users/austinchristensen/Dev/SelfLearningIos/LetsWatchThisBackEnd/node_modules/@databases/pg-test/jest/globalSetup.js',
  // globalTeardown:
  //   '/Users/austinchristensen/Dev/SelfLearningIos/LetsWatchThisBackEnd/node_modules/@databases/pg-test/jest/globalTeardown.js',
};
